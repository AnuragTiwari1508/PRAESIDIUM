import { Vote, Shield, Users, CheckCircle, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VotingSection = () => {
  const elections = [
    {
      title: "Municipal Council Elections 2024",
      status: "Active",
      endDate: "March 15, 2024",
      participation: "87%"
    },
    {
      title: "State Assembly By-Elections",
      status: "Upcoming",
      endDate: "April 20, 2024",
      participation: "—"
    }
  ];

  return (
    <section id="voting" className="py-24 bg-gradient-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-primary text-primary-foreground rounded-full px-6 py-3 mb-8 shadow-quantum">
            <Vote className="h-5 w-5" />
            <span className="font-semibold tracking-wide">Secure Voting System</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Quantum-Protected Democracy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participate in secure, transparent elections with our quantum-resistant voting platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="card-professional">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <Shield className="h-6 w-6 text-primary" />
                <span>Active Elections</span>
              </h3>
              <div className="space-y-4">
                {elections.map((election, index) => (
                  <div key={index} className="p-4 bg-background rounded-xl border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{election.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        election.status === 'Active' 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-primary/20 text-primary'
                      }`}>
                        {election.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Ends: {election.endDate}</span>
                      <span>Participation: {election.participation}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="btn-quantum w-full mt-6">
                <Vote className="mr-2 h-4 w-4" />
                Cast Your Vote
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="card-professional text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">2.4M+</h4>
                <p className="text-muted-foreground">Registered Voters</p>
              </div>
              <div className="card-professional text-center">
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">99.9%</h4>
                <p className="text-muted-foreground">Security Rating</p>
              </div>
            </div>
            
            <div className="card-professional">
              <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Security Features</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span>Post-quantum cryptographic protection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span>Blockchain-verified vote counting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span>Anonymous ballot verification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span>Real-time audit trails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VotingSection;