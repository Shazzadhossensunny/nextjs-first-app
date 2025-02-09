import Sidebar from "@/components/shared/Sidebar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
