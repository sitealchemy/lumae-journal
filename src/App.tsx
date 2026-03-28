import React, { useState, useMemo } from 'react';
import { ThemeBackground } from './components/ThemeBackground';
import { BookCard } from './components/BookCard';
import { Reader } from './components/Reader';
import { SAMPLE_BOOKS } from './data/books';
import { parseMarkdown, Book } from './lib/parser';
import { Search, SortAsc, SortDesc, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const books = useMemo(() => {
    return Object.entries(SAMPLE_BOOKS).map(([slug, content]) => 
      parseMarkdown(slug, content)
    ).sort((a, b) => {
      const orderA = a.metadata.order ?? 999;
      const orderB = b.metadata.order ?? 999;
      return sortOrder === 'asc' ? orderA - orderB : orderB - orderA;
    });
  }, [sortOrder]);

  const filteredBooks = useMemo(() => {
    return books.filter(book => 
      book.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.metadata.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [books, searchQuery]);

  return (
    <div className="min-h-screen">
      <ThemeBackground />
      
      <main className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        {/* Hero Section */}
        <header className="mb-16 text-center md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex justify-center text-white/20">
              <Sparkles size={32} />
            </div>
            <h1 className="mb-4 font-serif text-5xl font-light tracking-tighter md:text-7xl">
              Księgi Lumae
            </h1>
            <p className="mx-auto max-w-lg text-sm uppercase tracking-[0.3em] text-white/40">
              Mistyczne kroniki narodzin światła, świadomości i gwiazd
            </p>
          </motion.div>
        </header>

        {/* Controls */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input
              type="text"
              placeholder="Szukaj w kronikach..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-6 text-sm text-white outline-none transition-all focus:border-white/30 focus:bg-white/10"
            />
          </div>
          
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-widest text-white/60 transition-all hover:bg-white/10 hover:text-white"
          >
            {sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />}
            <span>Kolejność: {sortOrder === 'asc' ? 'Rosnąco' : 'Malejąco'}</span>
          </button>
        </div>

        {/* Library Grid */}
        <motion.div 
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.metadata.slug}
                metadata={book.metadata}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBooks.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-serif text-xl italic text-white/30">Cisza... Nie znaleziono żadnej księgi.</p>
          </div>
        )}
      </main>

      {/* Reader Overlay */}
      <AnimatePresence>
        {selectedBook && (
          <Reader 
            book={selectedBook} 
            onClose={() => setSelectedBook(null)} 
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
          &copy; 2024 Projekt Lumae &bull; Wszystkie światła zastrzeżone
        </p>
      </footer>
    </div>
  );
}
