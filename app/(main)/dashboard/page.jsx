import React from "react";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { CardContent, Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="px-5">
      {/* Budget progress */}

      {/* Overview */}

      {/* Account Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="bg-violet-300 hover:bg-violet-400  cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-full pt-5">
              <Plus />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
      </div>
    </div>
  );
};

export default DashboardPage;
