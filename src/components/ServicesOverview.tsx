import { Shield, Vote, CreditCard, User, Eye, FileText, Zap, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesOverview = () => {
  const services = [
    {
      icon: Vote,
      title: 'Quantum Voting',
      description: 'Participate in secure, transparent elections with post-quantum cryptography protection.',
      features: ['Anonymous ballots', 'Immutable records', 'Real-time results'],
      color: 'text-primary'
    },
    {
      icon: CreditCard,
      title: 'Subsidy Management',
      description: 'Track and receive government benefits through automated smart contract distribution.',
      features: ['Automatic eligibility', 'Transparent distribution', 'Real-time tracking'],
      color: 'text-accent'
    },
    {
      icon: User,
      title: 'Digital Identity',
      description: 'Secure, verifiable digital citizenship with quantum-resistant authentication.',
      features: ['Biometric verification', 'QR authentication', 'Privacy protected'],
      color: 'text-primary'
    },
    {
      icon: Eye,
      title: 'Transparency Portal',
      description: 'View all government operations with complete blockchain-based transparency.',
      features: ['Public ledger', 'Audit trails', 'Real-time monitoring'],
      color: 'text-accent'
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-quantum text-white rounded-full px-6 py-3 mb-8 shadow-quantum">
            <Shield className="h-5 w-5 animate-glow" />
            <span className="font-semibold tracking-wide">Government Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Comprehensive Digital
            <br />
            <span className="text-primary">Services Platform</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Access all government services through our secure, quantum-resistant platform 
            designed for <span className="text-primary font-semibold">transparency</span>, <span className="text-accent font-semibold">efficiency</span>, and citizen empowerment.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card-professional group">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl bg-gradient-quantum shadow-quantum group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="h-2 w-2 bg-accent rounded-full animate-glow"></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="btn-professional group-hover:btn-quantum transition-all duration-300"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Features */}
        <div className="bg-gradient-secure rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-stone-white mb-4">
              Enterprise-Grade Security
            </h3>
            <p className="text-stone-white/80 mb-8">
              Our platform employs cutting-edge security measures to protect citizen data and ensure system integrity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Lock className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-stone-white mb-2">Post-Quantum Crypto</h4>
                <p className="text-sm text-stone-white/60">Future-proof encryption</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-stone-white mb-2">Blockchain Security</h4>
                <p className="text-sm text-stone-white/60">Immutable data integrity</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-stone-white mb-2">Real-time Monitoring</h4>
                <p className="text-sm text-stone-white/60">24/7 threat detection</p>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-stone-white mb-2">Audit Compliance</h4>
                <p className="text-sm text-stone-white/60">Full transparency logs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;