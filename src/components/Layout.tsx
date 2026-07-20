import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingButtons } from './FloatingButtons';
import { useEffect } from 'react';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px] md:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
