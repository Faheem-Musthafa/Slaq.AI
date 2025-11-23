import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Mic2, BrainCircuit, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: <Mic2 className="w-8 h-8 text-slaq-green" />,
    step: "01",
    title: "Continuous Speech Analysis",
    description: "Our wearable mic monitors speech patterns 24/7 in natural environments, not just clinical settings.",
    align: "left"
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-slaq-green" />,
    step: "02",
    title: "AI-Guided Therapy",
    description: "Adaptive algorithms provide real-time feedback and personalized session plans that evolve as you improve.",
    align: "right"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-slaq-green" />,
    step: "03",
    title: "Progress Insights",
    description: "Visual dashboards track emotional tone and linguistic milestones, giving you clear, actionable data.",
    align: "left"
  }
];

// Spotlight Card Component for localized mouse tracking
const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`group relative border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden rounded-3xl ${className}`}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(157, 219, 44, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content Container */}
      <div className="relative h-full p-8">
        {children}
      </div>
    </motion.div>
  );
};

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-32 bg-slaq-black text-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slaq-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slaq-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slaq-green font-medium tracking-wider text-sm uppercase"
          >
            How Slaq Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
          >
            Precision in every syllable.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, idx) => (
            <SpotlightCard key={idx} delay={idx * 0.2}>
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-slaq-green/20 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-4xl font-bold text-white/5 font-mono group-hover:text-white/10 transition-colors">
                  {item.step}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-slaq-green transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
              
              {/* Decorative accent dots */}
              <div className="mt-8 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-slaq-green/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slaq-green/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slaq-green"></div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};