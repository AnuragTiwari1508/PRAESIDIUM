import { ArrowRight, Shield, Lock, Zap, Vote, CreditCard, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/quantum-network-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-stone overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Quantum blockchain network visualization" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-stone/80"></div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--quantum-blue)) 0.5px, transparent 0.5px)`,
               backgroundSize: '24px 24px'
             }}>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <Shield className="h-8 w-8 text-accent/30" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <Lock className="h-6 w-6 text-primary/30" />
        </div>
        <div className="absolute bottom-32 left-20 animate-pulse" style={{ animationDelay: '2s' }}>
          <Zap className="h-7 w-7 text-accent/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8">
          <Shield className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Quantum-Resistant Security</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Secure, Transparent
          <br />
          <span className="bg-gradient-quantum bg-clip-text text-transparent">
            Digital Governance
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the future of citizen services with quantum-resistant security, 
          immutable voting, transparent subsidy distribution, and seamless digital identity management.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="card-stone text-center">
            <Vote className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Secure Voting</h3>
            <p className="text-sm text-muted-foreground">Quantum-encrypted ballots with immutable records</p>
          </div>
          <div className="card-stone text-center">
            <CreditCard className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Smart Subsidies</h3>
            <p className="text-sm text-muted-foreground">Automated distribution with blockchain transparency</p>
          </div>
          <div className="card-stone text-center">
            <User className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Digital Identity</h3>
            <p className="text-sm text-muted-foreground">Secure, verifiable citizen identification</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="btn-quantum text-lg px-8 py-4" onClick={() => window.location.href = '/dashboard'}>
            Access Citizen Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="text-lg px-8 py-4 border-border/50 hover:bg-card/80">
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-4">Trusted by citizens nationwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4" />
              <span className="text-sm">Post-Quantum Encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Blockchain Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span className="text-sm">Real-time Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;