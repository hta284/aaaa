import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0985023531"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all hover:scale-110 hover:-translate-y-1 group relative"
        aria-label="Chat Zalo"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat Zalo
        </span>
        <MessageCircle size={28} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:0972833227"
        className="w-12 h-12 md:w-14 md:h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary-hover transition-all hover:scale-110 hover:-translate-y-1 group relative"
        aria-label="Gọi điện thoại"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          0972 833 227
        </span>
        <Phone size={28} className="animate-pulse" />
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-800/80 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 backdrop-blur-sm transition-all"
            aria-label="Lên đầu trang"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
