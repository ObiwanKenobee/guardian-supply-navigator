import { useEffect } from "react";

const SecurityPage = () => {
  useEffect(() => {
    console.log("Security page loaded");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Security</h1>
      <p>Security features coming soon...</p>
    </div>
  );
};

export default SecurityPage;