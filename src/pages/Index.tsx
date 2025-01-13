import { useEffect } from "react";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Solutions from "@/components/Solutions";
import CTA from "@/components/CTA";

const Index = () => {
  useEffect(() => {
    console.log("Dashboard loaded");
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Challenges />
      <Solutions />
      <CTA />
    </main>
  );
};

export default Index;