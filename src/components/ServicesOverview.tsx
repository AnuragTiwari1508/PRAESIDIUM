import { Shield, Vote, CreditCard, User, Eye, FileText, Zap, Lock } from 'lucide-react';
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
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-quantum text-white rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Government Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Comprehensive Digital Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access all government services through our secure, quantum-resistant platform 
            designed for transparency, efficiency, and citizen empowerment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card-stone group">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-stone ${service.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="h-1.5 w-1.5 bg-accent rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      Learn More
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