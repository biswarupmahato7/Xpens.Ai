"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { categoryColors } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { RefreshCw } from "lucide-react";

const RECURRING_INTERVALS = {
  DAILY: "Daily",
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

const TransactionTable = ({ transactions }) => {
  const filteredAndSortedTransaction = transactions;
  const handleSort = () => {};
  return (
    <div className="space-y-4">
      {/* Filters */}

      {/* Transactions */}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="">
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center text-gray-300">Date</div>
              </TableHead>
              <TableHead className="text-gray-300">Description</TableHead>

              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("category")}
              >
                <div className="flex items-center text-gray-300">Category</div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center justify-end text-gray-300">
                  Amount
                </div>
              </TableHead>
              <TableHead className="text-gray-300">Recurring</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedTransaction.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center text-muted-foreground"
                >
                  No Transaction Found
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedTransaction.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="text-gray-400">
                    {" "}
                    {format(new Date(transaction.date), "PP")}
                  </TableCell>
                  <TableCell className="text-gray-400">
                    {transaction.description}
                  </TableCell>
                  <TableCell className="capitalize">
                    <span
                      style={{
                        background: categoryColors[transaction.category],
                      }}
                      className="px-2 py-1 rounded text-white fond-bold text-sm"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell
                    className="text-right"
                    style={{
                      color: transaction.type === "EXPENSE" ? "red" : "#90EE90",
                    }}
                  >
                    {transaction.type === "EXPENSE" ? "-" : "+"}$
                    {transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {transaction.isRecurring ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge className="gap-1 bg-purple-100 text-purple-700 hover:bg-purple-300">
                              {" "}
                              <RefreshCw className="h-3 w-3" />
                              {
                                RECURRING_INTERVALS[
                                  transaction.recurringInterval
                                ]
                              }
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="text-sm">
                              <div className="font-medium">Next Date:</div>
                              <div> {format(new Date(transaction.nextRecurringDate), "PP")}</div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <Badge className="gap-1">
                        {" "}
                        <Clock className="h-3 w-3" />
                        One-time
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionTable;
