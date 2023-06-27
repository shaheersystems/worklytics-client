import React from "react";
import Dashboard from "./Dashboard";
import DashboardNavigation from "../components/DashboardNavigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Job Listing", href: "/jobs", current: true },
  { name: "Applications", href: "/applications", current: false },
  { name: "Questions", href: "/questions", current: false },
];
function JobLisiting() {
  return (
    <div>
      <DashboardNavigation navigation={navigation} />
    </div>
  );
}

export default JobLisiting;
