import React from 'react';
import { motion } from 'motion/react';
import { BookMetadata } from '../lib/parser';
import { BookOpen, Calendar } from 'lucide-react';

interface BookCardProps {
  metadata: BookMetadata;
  onClick: () => void;
}

export const BookCard: React.FC<BookCardProps> = ({ metadata, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="rounded-full bg-white/5 p-2 text-white/40 group-hover:text-white/80 transition-colors">
            <BookOpen size={20} />
          </div>
          {metadata.order && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              Księga {metadata.order}
            </span>
          )}
        </div>
        
        <div>
          <h3 className="font-serif text-xl font-light tracking-tight text-white/90 group-hover:text-white transition-colors">
            {metadata.title}
          </h3>
          {metadata.subtitle && (
            <p className="mt-1 font-serif text-sm italic text-white/50">
              {metadata.subtitle}
            </p>
          )}
        </div>

        {metadata.excerpt && (
          <p className="line-clamp-3 text-sm leading-relaxed text-white/40">
            {metadata.excerpt}
          </p>
        )}

        <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/20">
          <Calendar size={12} />
          <span>{metadata.date || 'Nieznany czas'}</span>
        </div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
