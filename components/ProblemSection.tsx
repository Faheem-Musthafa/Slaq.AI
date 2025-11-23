import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, DollarSign, Clock, ArrowUpRight } from 'lucide-react';

interface Problem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Misdiagnosis & Stress",
    description: "Traditional methods often rely on subjective snapshots, leading to potential misdiagnosis and emotional strain on families."
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "High Therapy Costs",
    description: "Quality speech therapy is expensive and insurance coverage is often limited, making it inaccessible for many who need it most."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Limited Access",
    description: "Manual observation is limited to clinic hours. Real progress happens in daily life, but it largely goes unmonitored."
  }
];

interface ProblemCardProps {
  problem: Problem;
  index: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this specific card in the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Create parallax effect for the icon (moves vertically as user scrolls)
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 hover:border-slaq-green/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden group h-full flex flex-col justify-between"
    >
      {/* Decorative Gradient Blob on Hover */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-gray-50 rounded-full blur-3xl group-hover:bg-slaq-green/10 transition-colors duration-500 pointer-events-none" />

      {/* Top Right Arrow Reveal */}
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 ease-out">
        <ArrowUpRight className="w-5 h-5 text-slaq-green" />
      </div>
      
      {/* Side Accent Line (Vertical Growth) */}
      <div className="absolute top-0 left-0 w-1 h-0 bg-slaq-green group-hover:h-full transition-all duration-500 ease-in-out" />
      
      <div>
        <motion.div 
          style={{ y }}
          variants={{
            hover: {
              backgroundColor: "rgba(157, 219, 44, 0.1)", // Subtle green tint
              color: "#9DDB2C", // Slaq Green text
              scale: 1.1
            }
          }}
          className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-slaq-black transition-all duration-500 relative z-10 shadow-sm ring-1 ring-black/5"
        >
          <motion.div
            variants={{
                hover: {
                    filter: "drop-shadow(0 0 8px rgba(157, 219, 44, 0.6))",
                    scale: [1, 1.05, 1],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }
            }}
          >
            {problem.icon}
          </motion.div>
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-slaq-green transition-colors relative z-10">{problem.title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm relative z-10 group-hover:text-gray-600 transition-colors">{problem.description}</p>
      </div>
    </motion.div>
  );
};

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            The Silent Struggle.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            Speech therapy hasn't evolved in decades. We're fixing the gaps that leave millions behind.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <ProblemCard key={idx} problem={problem} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};