import React from "react";
import ApplicationsHeading from "../components/ApplicationHeading";
import ApplicationsTable from "../components/ApplicationsTable";

function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      name: "Mark Wood",
      email: "mark.wood@gmail.com",
      status: "Pending",
      jobTitle: "Jr. Front-end Developer",
    },
    {
      id: 1,
      name: "Brad Pit",
      email: "brad.pit@gmail.com",
      status: "Accepted",
      jobTitle: "Jr. Front-end Developer",
    },
    {
      id: 1,
      name: "Edward Norton",
      email: "ednorton@gmail.com",
      status: "Accepted",
      jobTitle: "Jr. Front-end Developer",
    },
  ];
  return (
    <div>
      <ApplicationsHeading />
      <div className='max-w-[1220px] m-auto'>
        <ApplicationsTable applications={applications} />
      </div>
    </div>
  );
}

export default ApplicationsPage;
