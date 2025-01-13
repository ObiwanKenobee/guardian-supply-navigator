import { useEffect } from "react";

const IntegrationPage = () => {
  useEffect(() => {
    console.log("Integration page loaded");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Integration Platform</h1>
      <p>Integration features coming soon...</p>
    </div>
  );
};

export default IntegrationPage;