import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { Book } from '../lib/parser';
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from 'lucide-react';

interface ReaderProps {
  book: Book;
  onClose: () => void;
}

export const Reader: React.FC<ReaderProps> = ({ book, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Persistence logic
  useEffect(() => {
    const savedPage = localStorage.getItem(`lumae-page-${book.metadata.slug}`);
    if (savedPage) {
      setCurrentPage(parseInt(savedPage, 10));
    }
  }, [book.metadata.slug]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < book.pages.length) {
      setCurrentPage(newPage);
      localStorage.setItem(`lumae-page-${book.metadata.slug}`, newPage.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed inset-0 z-50 flex flex-col bg-[#050505]/95 backdrop-blur-xl ${isFullScreen ? '' : 'p-4 md:p-8'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex flex-col">
          <h2 className="font-serif text-lg text-white/90">{book.metadata.title}</h2>
          <p className="text-xs uppercase tracking-widest text-white/40">Strona {currentPage + 1} z {book.pages.length}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsFullScreen(!isFullScreen)}
            className="rounded-full p-2 text-white/40 hover:bg-white/5 hover:text-white transition-all"
            title="Tryb czytania"
          >
            {isFullScreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-white/40 hover:bg-white/5 hover:text-white transition-all"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative flex-1 overflow-y-auto custom-scrollbar">
        <div className="mx-auto max-w-2xl px-6 py-12 md:py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="prose prose-invert prose-lumae"
            >
              <ReactMarkdown>{book.pages[currentPage]}</ReactMarkdown>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer / Navigation */}
      <div className="flex items-center justify-center border-t border-white/10 bg-black/20 px-6 py-6 backdrop-blur-md">
        <div className="flex items-center gap-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm uppercase tracking-widest transition-all ${
              currentPage === 0 
                ? 'opacity-20 cursor-not-allowed' 
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Poprzednia</span>
          </button>

          <div className="flex items-center gap-2">
            {book.pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentPage ? 'w-8 bg-white/80' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === book.pages.length - 1}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm uppercase tracking-widest transition-all ${
              currentPage === book.pages.length - 1 
                ? 'opacity-20 cursor-not-allowed' 
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className="hidden sm:inline">Następna</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
