import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-accent/10">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full"
        >
          Guardian IO Solutions
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Transforming Supply Chains for Transparency, Security, and Sustainability
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-10 text-lg text-gray-200"
        >
          Addressing the unique challenges of Fortune 500 companies with tailored solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="px-8 py-3 text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors">
            Learn More
          </button>
          <button className="px-8 py-3 text-white bg-transparent border border-white rounded-lg hover:bg-white/10 transition-colors">
            Request a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;