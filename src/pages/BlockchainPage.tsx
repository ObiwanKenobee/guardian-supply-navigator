import { useEffect } from "react";

const BlockchainPage = () => {
  useEffect(() => {
    console.log("Blockchain page loaded");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blockchain Transparency</h1>
      <p>Blockchain transparency features coming soon...</p>
    </div>
  );
};

export default BlockchainPage;