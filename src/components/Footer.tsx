import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Security Guidelines', href: '#security' },
    { name: 'API Documentation', href: '#api' },
  ];

  const services = [
    { name: 'Digital Identity', href: '#identity' },
    { name: 'Secure Voting', href: '#voting' },
    { name: 'Subsidy Management', href: '#subsidy' },
    { name: 'Transparency Portal', href: '#transparency' },
  ];

  const contact = [
    { icon: Phone, text: '+91 1800-GOV-HELP', href: 'tel:+911800468435' },
    { icon: Mail, text: 'support@praesidium.gov.in', href: 'mailto:support@praesidium.gov.in' },
    { icon: MapPin, text: 'New Delhi, India', href: '#location' },
  ];

  return (
    <footer className="bg-secondary text-stone-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-quantum p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Praesidium</h3>
                <p className="text-stone-white/60 text-sm">Secure E-Governance</p>
              </div>
            </div>
            <p className="text-stone-white/70 text-sm mb-6 leading-relaxed">
              Building the future of digital governance with quantum-resistant security, 
              transparent operations, and citizen-centric services.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Quantum Secured Platform</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-stone-white/70 hover:text-stone-white transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-stone-white/70 hover:text-stone-white transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {contact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="flex items-center space-x-3 text-stone-white/70 hover:text-stone-white transition-colors text-sm"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-stone-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-stone-white/60 text-sm">
                © 2024 Praesidium. All rights reserved. | Government of India
              </p>
              <p className="text-stone-white/40 text-xs mt-1">
                Built with post-quantum cryptography for citizen security
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-accent">
                <div className="h-2 w-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">System Status: Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;