import { useEffect } from "react";

const SustainabilityPage = () => {
  useEffect(() => {
    console.log("Sustainability page loaded");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sustainability Tracking</h1>
      <p>Sustainability features coming soon...</p>
    </div>
  );
};

export default SustainabilityPage;