import React from "react";
import DashboardNavigation from "../components/DashboardNavigation";
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Job Listing", href: "#", current: false },
  { name: "Applications", href: "#", current: false },
  { name: "Questions", href: "#", current: false },
];
function NewJob() {
  return (
    <div>
      <DashboardNavigation navigation={navigation} />
    </div>
  );
}

export default NewJob;
