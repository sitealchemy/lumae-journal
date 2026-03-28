import React from 'react';
import { motion } from 'motion/react';
import { Thought } from '../data/thoughts';
import { Quote } from 'lucide-react';

interface ThoughtCardProps {
  thought: Thought;
}

export const ThoughtCard: React.FC<ThoughtCardProps> = ({ thought }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative border-l border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10"
    >
      <div className="absolute -left-[1px] top-0 h-12 w-[2px] bg-white/40 transition-all group-hover:h-full group-hover:bg-white/80" />
      
      <Quote className="mb-6 text-white/10 transition-colors group-hover:text-white/30" size={32} />
      
      <p className="font-serif text-xl leading-relaxed text-white/90 md:text-2xl">
        {thought.content}
      </p>
      
      {thought.date && (
        <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
          {thought.date}
        </div>
      )}
    </motion.div>
  );
};
