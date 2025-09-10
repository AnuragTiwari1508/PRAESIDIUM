import { useState, useEffect } from 'react';
import { Menu, X, Shield, Vote, CreditCard, User, Eye, Info, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services', icon: Shield },
    { name: 'Voting', href: '#voting', icon: Vote },
    { name: 'Subsidy', href: '#subsidy', icon: CreditCard },
    { name: 'Identity', href: '#identity', icon: User },
    { name: 'Transparency', href: '#transparency', icon: Eye },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-emerald-500/10 py-2' : 'bg-slate-950/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-xl shadow-lg shadow-emerald-500/25 animate-pulse">
              <img src="/logo.png" alt="PRAESIDIUM" className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-wide">PRAESIDIUM</h1>
              <p className="text-gray-300 text-sm font-medium">Quantum E-Governance</p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-emerald-500/20 border border-transparent hover:border-emerald-500/30"
                >
                  <Icon className="h-4 w-4 group-hover:text-emerald-400 transition-all duration-300 group-hover:scale-110" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
            <div className="ml-6 flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="btn-professional text-stone-white border-stone-white/30 hover:border-stone-white"
              >
                Login
              </Button>
              <Button className="btn-quantum" onClick={() => window.location.href = '/dashboard'}>
                Dashboard
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-white hover:bg-stone-white/10 p-3"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden nav-professional border-t border-stone-white/10 mt-4">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-4 text-stone-white/80 hover:text-stone-white px-4 py-3 rounded-lg transition-all duration-300 hover:bg-stone-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="btn-professional w-full text-stone-white border-stone-white/30"
                >
                  Login
                </Button>
                <Button className="btn-quantum w-full" onClick={() => window.location.href = '/dashboard'}>
                  Access Dashboard
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;