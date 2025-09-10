import { useState } from 'react';
import { Menu, X, Shield, Vote, CreditCard, User, Eye, Info, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services', icon: Shield },
    { name: 'Voting', href: '#voting', icon: Vote },
    { name: 'Subsidy', href: '#subsidy', icon: CreditCard },
    { name: 'Identity', href: '#identity', icon: User },
    { name: 'Transparency', href: '#transparency', icon: Eye },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-quantum p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-stone-white font-bold text-lg">QuantumGov</h1>
              <p className="text-stone-white/60 text-xs">Secure E-Governance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-stone-white/80 hover:text-stone-white transition-colors duration-200 group"
                >
                  <Icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <Button className="btn-quantum ml-4" onClick={() => window.location.href = '/dashboard'}>
              Access Dashboard
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-white"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-secondary border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-stone-white/80 hover:text-stone-white px-3 py-2 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-2">
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