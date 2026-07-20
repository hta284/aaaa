import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'TRANG CHỦ', path: '/' },
  { name: 'VỀ CHÚNG TÔI', path: '/gioi-thieu' },
  { name: 'DỊCH VỤ', path: '/dich-vu' },
  { name: 'TIN TỨC', path: '/tin-tuc' },
  { name: 'DỰ ÁN CASE STUDY', path: '/du-an' },
  { name: 'LIÊN HỆ', path: '/lien-he' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
        isScrolled ? 'shadow-md py-2' : 'py-3'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img src="/logo.png" alt="Quang Hải Logo" className="h-16 w-auto object-contain" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
              e.currentTarget.nextElementSibling?.classList.add('flex');
            }} />
            <div className="hidden text-secondary font-black text-3xl leading-none items-center">
              <span className="text-secondary uppercase">Quang</span>
              <span className="text-primary uppercase ml-1">Hải</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-4 ml-auto mr-4">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 font-bold text-sm transition-colors",
                    isActive ? "text-secondary" : "text-gray-700 hover:text-secondary" 
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA, Search & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <Link 
              to="/ho-so-nhan-luc"
              className="hidden md:flex items-center justify-center font-bold px-4 py-2 bg-secondary text-white hover:bg-secondary-hover transition-colors text-sm"
            >
              HỒ SƠ NHÂN LỰC
            </Link>
            
            <button className="text-gray-900 hover:text-secondary transition-colors p-2 hidden lg:block">
              <Search size={20} className="font-bold" strokeWidth={3} />
            </button>

            <button 
              className="xl:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white shadow-xl overflow-hidden border-t"
          >
            <nav className="flex flex-col py-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "px-6 py-3 font-bold text-sm transition-colors border-l-4",
                      isActive 
                        ? "border-secondary bg-orange-50 text-secondary" 
                        : "border-transparent text-gray-700 hover:bg-gray-50 hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="px-6 py-4 mt-2 border-t flex flex-col gap-3">
                <Link 
                  to="/ho-so-nhan-luc"
                  className="flex items-center justify-center bg-secondary text-white font-bold py-3 rounded-md w-full shadow-md text-sm"
                >
                  HỒ SƠ NHÂN LỰC
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
