import React, { useState, useEffect } from "react";
import ApplicationsHeading from "../components/ApplicationHeading";
import ApplicationsTable from "../components/ApplicationsTable";
import { useAuth } from "../context/AuthContext";
function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `http://localhost:5000/api/company/applications?company_id=${user._id.$oid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
      });
  }, []);
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
