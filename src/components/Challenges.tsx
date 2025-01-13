import { motion } from "framer-motion";
import { Shield, Leaf, Scale, Cog, Database } from "lucide-react";

const challenges = [
  {
    icon: Shield,
    title: "Supply Chain Transparency",
    description: "Ensure complete visibility and traceability across your supply chain network.",
  },
  {
    icon: Database,
    title: "Data Security",
    description: "Protect sensitive information with advanced security measures and protocols.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Track and optimize environmental impact across operations.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "Stay compliant with evolving global regulations and standards.",
  },
  {
    icon: Cog,
    title: "Technology Integration",
    description: "Seamlessly integrate advanced technologies into existing systems.",
  },
];

const Challenges = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Core Challenges</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding and addressing the key challenges faced by Fortune 500 companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <challenge.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;