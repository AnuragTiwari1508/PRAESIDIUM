import { User, Shield, QrCode, Fingerprint, Eye, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IdentitySection = () => {
  return (
    <section id="identity" className="py-24 bg-gradient-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-primary text-primary-foreground rounded-full px-6 py-3 mb-8 shadow-quantum">
            <User className="h-5 w-5" />
            <span className="font-semibold tracking-wide">Digital Identity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Secure Citizen Identity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your quantum-protected digital identity for seamless access to all government services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="card-professional">
              <div className="bg-gradient-quantum rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-20">
                  <QrCode className="h-24 w-24" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Digital ID Card</h3>
                      <p className="text-white/80">Quantum-Secured Identity</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/70">Citizen ID</span>
                      <span className="font-mono">QG-2024-***456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Status</span>
                      <span className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4" />
                        <span>Verified</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Security Level</span>
                      <span className="font-semibold">Quantum Protected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-professional">
              <h4 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Identity Features</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-xl border border-border/50 text-center">
                  <QrCode className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h5 className="font-semibold mb-2">QR Authentication</h5>
                  <p className="text-xs text-muted-foreground">Instant service access</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border/50 text-center">
                  <Fingerprint className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h5 className="font-semibold mb-2">Biometric Verify</h5>
                  <p className="text-xs text-muted-foreground">Multi-factor security</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border/50 text-center">
                  <Eye className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h5 className="font-semibold mb-2">Privacy Protected</h5>
                  <p className="text-xs text-muted-foreground">Zero-knowledge proofs</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border/50 text-center">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h5 className="font-semibold mb-2">Instant Verification</h5>
                  <p className="text-xs text-muted-foreground">Real-time validation</p>
                </div>
              </div>
            </div>

            <div className="card-professional">
              <h4 className="text-xl font-semibold mb-4">Security Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span>Post-quantum cryptographic protection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span>Decentralized identity verification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span>Tamper-proof digital credentials</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span>Cross-platform compatibility</span>
                </li>
              </ul>
              <Button className="btn-quantum w-full mt-6">
                Access Digital Identity
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;