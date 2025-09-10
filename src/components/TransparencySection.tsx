import { Eye, BarChart3, Activity, FileText, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TransparencySection = () => {
  const metrics = [
    { label: "Total Transactions", value: "2.4M+", icon: Activity },
    { label: "Funds Distributed", value: "₹145B+", icon: TrendingUp },
    { label: "Active Citizens", value: "5.2M+", icon: Globe },
    { label: "System Uptime", value: "99.9%", icon: BarChart3 }
  ];

  return (
    <section id="transparency" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-quantum text-white rounded-full px-6 py-3 mb-8 shadow-quantum">
            <Eye className="h-5 w-5" />
            <span className="font-semibold tracking-wide">Transparency Portal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Complete Government Transparency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time visibility into all government operations with blockchain-verified data integrity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="card-professional text-center group">
                <Icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
                <h4 className="text-3xl font-bold text-foreground mb-2">{metric.value}</h4>
                <p className="text-muted-foreground font-medium">{metric.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card-professional">
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span>Real-Time Analytics</span>
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Voting Participation</span>
                  <span className="text-accent font-bold">87%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-quantum h-3 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Subsidy Distribution</span>
                  <span className="text-accent font-bold">94%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-quantum h-3 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Service Satisfaction</span>
                  <span className="text-accent font-bold">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-quantum h-3 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-professional">
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <FileText className="h-6 w-6 text-accent" />
              <span>Public Records</span>
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-xl border border-border/50">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold">Budget Allocation 2024</h5>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Public</span>
                </div>
                <p className="text-sm text-muted-foreground">Complete breakdown of government fund allocation</p>
              </div>
              <div className="p-4 bg-background rounded-xl border border-border/50">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold">Election Results Archive</h5>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Verified</span>
                </div>
                <p className="text-sm text-muted-foreground">Immutable records of all past elections</p>
              </div>
              <div className="p-4 bg-background rounded-xl border border-border/50">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold">Subsidy Distribution Log</h5>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Live</span>
                </div>
                <p className="text-sm text-muted-foreground">Real-time tracking of benefit payments</p>
              </div>
            </div>
            <Button className="btn-professional w-full mt-6">
              <Eye className="mr-2 h-4 w-4" />
              Explore All Records
            </Button>
          </div>
        </div>

        <div className="mt-16 card-professional bg-gradient-secure text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-stone-white mb-6">
              Blockchain-Verified Integrity
            </h3>
            <p className="text-stone-white/80 text-lg mb-8">
              Every transaction, vote, and government operation is cryptographically secured 
              and permanently recorded on our quantum-resistant blockchain infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">256-bit</div>
                <div className="text-stone-white/60">Quantum Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-stone-white/60">Immutable Records</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-stone-white/60">Real-time Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;