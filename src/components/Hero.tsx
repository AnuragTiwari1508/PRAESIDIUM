import { ArrowRight, Shield, Lock, Zap, Vote, CreditCard, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/quantum-network-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-stone overflow-hidden">
      {/* Enhanced Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Quantum blockchain network visualization showcasing secure government infrastructure" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-stone/85"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/20"></div>
      </div>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 75%, hsl(var(--quantum-blue)) 1px, transparent 1px),
                                radial-gradient(circle at 75% 25%, hsl(var(--quantum-emerald)) 0.8px, transparent 0.8px)`,
               backgroundSize: '32px 32px, 28px 28px'
             }}>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-12 animate-float">
          <Shield className="h-10 w-10 text-accent/40" />
        </div>
        <div className="absolute top-40 right-24 animate-float" style={{ animationDelay: '2s' }}>
          <Lock className="h-8 w-8 text-primary/40" />
        </div>
        <div className="absolute bottom-40 left-24 animate-float" style={{ animationDelay: '4s' }}>
          <Zap className="h-9 w-9 text-accent/40" />
        </div>
        <div className="absolute top-60 left-1/3 animate-scale" style={{ animationDelay: '1s' }}>
          <Vote className="h-6 w-6 text-primary/30" />
        </div>
        <div className="absolute bottom-60 right-1/3 animate-scale" style={{ animationDelay: '3s' }}>
          <User className="h-7 w-7 text-accent/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center space-x-3 bg-card/60 backdrop-blur-md border border-border/30 rounded-full px-6 py-3 mb-12 shadow-professional">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-accent animate-glow" />
            <span className="text-sm font-semibold tracking-wide">Quantum-Resistant Security</span>
          </div>
          <div className="h-4 w-px bg-border/50"></div>
          <span className="text-xs text-muted-foreground font-medium">Post-Quantum Cryptography</span>
        </div>

        {/* Enhanced Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
          Secure, Transparent
          <br />
          <span className="bg-gradient-quantum bg-clip-text text-transparent relative">
            Digital Governance
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-quantum rounded-full opacity-60"></div>
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          Experience the future of citizen services with <span className="text-primary font-semibold">quantum-resistant security</span>, 
          <span className="text-accent font-semibold"> immutable voting</span>, transparent subsidy distribution, and seamless digital identity management.
        </p>

        {/* Enhanced Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="card-professional text-center group">
            <div className="bg-gradient-quantum p-4 rounded-2xl mx-auto mb-6 w-fit shadow-quantum group-hover:scale-110 transition-transform duration-300">
              <Vote className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Secure Voting</h3>
            <p className="text-muted-foreground leading-relaxed">Quantum-encrypted ballots with immutable blockchain records ensuring democratic integrity</p>
          </div>
          <div className="card-professional text-center group">
            <div className="bg-gradient-quantum p-4 rounded-2xl mx-auto mb-6 w-fit shadow-quantum group-hover:scale-110 transition-transform duration-300">
              <CreditCard className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Smart Subsidies</h3>
            <p className="text-muted-foreground leading-relaxed">Automated distribution with complete blockchain transparency and real-time tracking</p>
          </div>
          <div className="card-professional text-center group">
            <div className="bg-gradient-quantum p-4 rounded-2xl mx-auto mb-6 w-fit shadow-quantum group-hover:scale-110 transition-transform duration-300">
              <User className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Digital Identity</h3>
            <p className="text-muted-foreground leading-relaxed">Secure, verifiable citizen identification with quantum-resistant authentication</p>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            className="btn-quantum text-lg px-10 py-5 shadow-quantum hover:shadow-elevated" 
            onClick={() => window.location.href = '/dashboard'}
          >
            Access Citizen Dashboard
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button className="btn-professional text-lg px-10 py-5">
            <Shield className="mr-3 h-5 w-5" />
            Learn More
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-border/20">
          <p className="text-lg text-muted-foreground mb-8 font-medium">Trusted by millions of citizens nationwide</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20">
              <Lock className="h-8 w-8 text-primary animate-glow" />
              <span className="text-sm font-semibold">Post-Quantum Encryption</span>
              <span className="text-xs text-muted-foreground text-center">Future-proof security protocols</span>
            </div>
            <div className="flex flex-col items-center space-y-3 bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20">
              <Shield className="h-8 w-8 text-accent animate-glow" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-semibold">Blockchain Verified</span>
              <span className="text-xs text-muted-foreground text-center">Immutable transaction records</span>
            </div>
            <div className="flex flex-col items-center space-y-3 bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20">
              <Zap className="h-8 w-8 text-primary animate-glow" style={{ animationDelay: '2s' }} />
              <span className="text-sm font-semibold">Real-time Security</span>
              <span className="text-xs text-muted-foreground text-center">24/7 threat monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;