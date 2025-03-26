import React, { Suspense } from "react";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { CardContent, Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { getDashboardData, getUserAccounts } from "@/actions/dashboard";
import AccountCard from "./_components/account.cart";
import { getCurrentBudget } from "@/actions/budget";
import { BudgetProgress } from "./_components/budget.progress";
import { DashboardOverview } from "./_components/transaction.overview";


 const  DashboardPage = async() => {
  const accounts = await getUserAccounts()
  
  const defaultAccount = accounts?.find((account) => account.isDefault)
  let budgetData = null;
  if(defaultAccount){
    budgetData = await getCurrentBudget(defaultAccount.id)
  }
  const transactions = await getDashboardData();
  return (
    <div className="px-5">
      {/* Budget progress */}
      {
        defaultAccount && (
          <BudgetProgress
           initialBudget={budgetData?.budget}
           currentExpenses={budgetData?.currentExpenses || 0}
          />
        )
      }

      {/* Overview */}
      <Suspense fallback={"Loading Overview..."}>
        <DashboardOverview
         accounts={accounts}
         transactions={transactions || []}
        
        />

      </Suspense>

      {/* Account Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-2">
        <CreateAccountDrawer>
          <Card className="bg-violet-300 hover:bg-violet-400  cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-full pt-5">
              <Plus />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {
          accounts.length > 0 && 
           accounts?.map((account) =>{
            return   <AccountCard key={account.id} account={account} />
           })
        }
      </div>
    </div>
  );
};

export default DashboardPage;
