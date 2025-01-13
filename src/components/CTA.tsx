import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Empower Your Supply Chain with Guardian IO's Innovative Solutions
          </h2>
          <p className="text-gray-300 mb-10">
            Join leading Fortune 500 companies in transforming their supply chain operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
              Get Started Today
            </button>
            <button className="px-8 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white/10 transition-colors">
              Talk to Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;