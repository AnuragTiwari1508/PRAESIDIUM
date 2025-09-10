import { CreditCard, DollarSign, Clock, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SubsidySection = () => {
  const subsidyPrograms = [
    {
      name: "Digital India Allowance",
      amount: "₹2,500",
      status: "Active",
      nextPayment: "March 1, 2024"
    },
    {
      name: "Education Support Grant", 
      amount: "₹5,000",
      status: "Pending",
      nextPayment: "March 15, 2024"
    }
  ];

  return (
    <section id="subsidy" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-accent text-accent-foreground rounded-full px-6 py-3 mb-8 shadow-glow">
            <CreditCard className="h-5 w-5" />
            <span className="font-semibold tracking-wide">Subsidy Management</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Transparent Benefit Distribution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track and receive government subsidies with complete transparency and automated processing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="card-professional text-center">
            <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-foreground mb-2">₹145B+</h4>
            <p className="text-muted-foreground">Total Distributed</p>
          </div>
          <div className="card-professional text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-foreground mb-2">5.2M+</h4>
            <p className="text-muted-foreground">Beneficiaries</p>
          </div>
          <div className="card-professional text-center">
            <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-foreground mb-2">99.7%</h4>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card-professional">
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <CreditCard className="h-6 w-6 text-accent" />
              <span>Your Active Subsidies</span>
            </h3>
            <div className="space-y-4">
              {subsidyPrograms.map((program, index) => (
                <div key={index} className="p-4 bg-background rounded-xl border border-border/50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{program.name}</h4>
                      <p className="text-2xl font-bold text-accent mt-1">{program.amount}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.status === 'Active' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-yellow-500/20 text-yellow-600'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Next payment: {program.nextPayment}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button className="btn-secure w-full mt-6">
              View Payment History
            </Button>
          </div>

          <div className="space-y-6">
            <div className="card-professional">
              <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>How It Works</span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold">Automatic Eligibility Check</h5>
                    <p className="text-sm text-muted-foreground">AI-powered verification against government databases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Smart Contract Processing</h5>
                    <p className="text-sm text-muted-foreground">Blockchain ensures transparent, tamper-proof distribution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 text-accent rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Direct Benefit Transfer</h5>
                    <p className="text-sm text-muted-foreground">Instant payment to verified bank accounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidySection;