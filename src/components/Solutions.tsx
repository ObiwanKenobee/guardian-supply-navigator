import { motion } from "framer-motion";
import { Link2, Shield, Leaf, Scale, Cog } from "lucide-react";

const solutions = [
  {
    icon: Link2,
    title: "Blockchain-Enabled Supply Chain",
    description: "Immutable transaction logs and real-time compliance tracking for enhanced trust.",
  },
  {
    icon: Shield,
    title: "AI-Powered Security",
    description: "Advanced threat detection and proactive response systems for robust protection.",
  },
  {
    icon: Leaf,
    title: "Sustainability Tools",
    description: "Comprehensive tracking and reporting for environmental impact management.",
  },
  {
    icon: Scale,
    title: "Compliance Management",
    description: "Automated tracking of local and global regulations to ensure compliance.",
  },
  {
    icon: Cog,
    title: "Technology Integration",
    description: "Seamless incorporation of AI, IoT, and blockchain technologies.",
  },
];

const Solutions = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions designed to address complex enterprise challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card backdrop-blur-sm rounded-xl border border-gray-200 hover:border-accent/50 transition-all"
            >
              <solution.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;