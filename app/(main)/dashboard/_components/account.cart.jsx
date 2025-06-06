"use client"

import React from "react";
import { ArrowUpRight, ArrowDownRight, CreditCard } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { updateDefaultAccount } from "@/actions/account";
import useFetch from "@/Hooks/use-fetch";
import { toast } from "sonner";

const AccountCard = ({ account }) => {
  const { name, type, balance, id, isDefault } = account;

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (event)=>{
    event.preventDefault();

    if(isDefault){
        toast.warning('You need at least 1 default account')
        return;
    }
    await updateDefaultFn(id)
  }

  useEffect(() => {
    if (updatedAccount && updatedAccount.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount]);
  

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  return (
    <div>
      <Card className="bg-violet-400 hover:bg-violet-600">
        <Link href={`/account/${id}`}>
          <CardHeader className="flex justify-between">
            <CardTitle>{name}</CardTitle>
            <Switch className="bg-slate-700 peer-checked:bg-green-500"
               checked={isDefault}
               onClick={handleDefaultChange}
               disabled={updateDefaultLoading}
            />

          </CardHeader>
          <CardContent className="mb-2">
            <div className="text-2xl font-bold">
              ${parseFloat(balance).toFixed(2)}
            </div>
            <span className="text-xs  bg-green-400 p-[3px] rounded-md">
              {type.charAt(0) + type.slice(1).toLowerCase()} Account
            </span>
          </CardContent>
          
          <CardFooter className="flex justify-between text-sm text-gray-200">
            <div className="flex items-center bg-slate-900 p-[5px] rounded-xl">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-400 font-bold" />
              Income
            </div>
            <div className="flex items-center  bg-slate-900 p-[5px] rounded-xl">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              Expense
            </div>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
};

export default AccountCard;
