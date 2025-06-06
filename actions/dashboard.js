"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { isDate } from "date-fns";
import { revalidatePath } from "next/cache";

// function for convert balance to Number 
const serializeTransaction = (obj) => {
    const serialized = {...obj};

    if(obj.balance){
        serialized.balance = obj.balance.toNumber();
    }

    if(obj.amount){
        serialized.amount = obj.amount.toNumber();
    }
    return serialized;
}

export async function createAccount(data) {
    try{
        const {userId} = await auth();
        if(!userId) throw new Error('Unauthorized')

            const user = await db.user.findUnique({
                where:{
                    clerkUserId:userId
                }
            })

            if(!user){
                throw new Error("User not found")
            }

            //convert blanca to float

            const balanceFloat = parseFloat(data.balance)
            if(isNaN(balanceFloat)){
                throw new Error("Invalid balance amount ")
            }

            // check if this is the user's first account
            const existingAccount  = await db.account.findMany({
                where: {
                    userId: user.id
                }
            })
             
            //set default account
            const shouldBeDefault = existingAccount.length === 0 ? true : data.isDefault;
            
            // If this account should be default, unset Others default accounts
            if(shouldBeDefault){
                await db.account.updateMany({
                    where: {userId: user.id, isDefault: true},
                    data: {isDefault: false},
                })
            }
 //account create
            const account = await db.account.create({
                data:{
                    ...data,
                    balance: balanceFloat,
                    userId: user.id,
                    isDefault: shouldBeDefault
                }
            })

            const serializedAccount = serializeTransaction(account)

            revalidatePath("/dashboard");
            return {success: true, data: serializedAccount}

    }catch(error){
        throw new Error(error.message)
    }
    
}

export async function getUserAccounts(){
    const {userId} = await auth();
    if(!userId) throw new Error('Unauthorized')

        const user = await db.user.findUnique({
            where: {clerkUserId: userId},
        });

        if(!user){
            throw new Error('User not found')
        }


        const accounts = await db.account.findMany({
            where: {userId: user.id},
            orderBy: {createdAt: "desc"},
            include: {
                _count:{
                    select: {
                        transactions: true
                    }
                }
            }
        })
        const serializedAccount = accounts.map(serializeTransaction)
        return serializedAccount;

}

export async function getDashboardData() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    if (!user) {
      throw new Error("User not found");
    }
  
    // Get all user transactions
    const transactions = await db.transaction.findMany({
      where: { userId: user.id },
      orderBy: { date: "desc" },
    });
  
    return transactions.map(serializeTransaction);
  }