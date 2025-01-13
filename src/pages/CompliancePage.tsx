import { useEffect } from "react";

const CompliancePage = () => {
  useEffect(() => {
    console.log("Compliance page loaded");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Compliance Management</h1>
      <p>Compliance features coming soon...</p>
    </div>
  );
};

export default CompliancePage;