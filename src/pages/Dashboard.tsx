import { useState } from 'react';
import { 
  User, 
  Vote, 
  CreditCard, 
  Eye, 
  Bell, 
  Shield, 
  CheckCircle, 
  Clock, 
  QrCode,
  ArrowRight,
  Calendar,
  DollarSign,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardTabs = [
    { id: 'overview', name: 'Overview', icon: Shield },
    { id: 'identity', name: 'Digital ID', icon: User },
    { id: 'voting', name: 'Voting', icon: Vote },
    { id: 'subsidies', name: 'Subsidies', icon: CreditCard },
    { id: 'transparency', name: 'Transparency', icon: Eye },
  ];

  const notifications = [
    { type: 'success', message: 'Monthly subsidy of ₹2,500 credited', time: '2 hours ago' },
    { type: 'info', message: 'New election: Municipal Council voting opens tomorrow', time: '1 day ago' },
    { type: 'warning', message: 'Digital ID expires in 30 days - Renew now', time: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-quantum p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-stone-white font-bold text-lg">
                  <a href="/" className="hover:text-accent transition-colors">Praesidium</a>
                </h1>
                <p className="text-stone-white/60 text-xs">Citizen Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-stone-white relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full"></span>
              </Button>
              <div className="flex items-center space-x-2 text-stone-white">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-semibold">
                  AS
                </div>
                <span className="hidden sm:block">Arjun Sharma</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {dashboardTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-card hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome */}
                <div className="card-stone">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Welcome back, Arjun!
                      </h2>
                      <p className="text-muted-foreground">
                        Your government services dashboard is secure and up to date.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-accent">
                      <Shield className="h-5 w-5" />
                      <span className="text-sm font-medium">Quantum Secured</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-stone">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Vote className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Votes Cast</p>
                        <p className="text-2xl font-bold">12</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-stone">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <CreditCard className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Subsidies Received</p>
                        <p className="text-2xl font-bold">₹45,000</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-stone">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ID Status</p>
                        <p className="text-lg font-bold text-accent">Verified</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="card-stone">
                  <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Recent Notifications</span>
                  </h3>
                  <div className="space-y-4">
                    {notifications.map((notification, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg">
                        <div className={`p-2 rounded-lg ${
                          notification.type === 'success' ? 'bg-accent/10' :
                          notification.type === 'info' ? 'bg-primary/10' : 'bg-destructive/10'
                        }`}>
                          {notification.type === 'success' ? (
                            <CheckCircle className={`h-4 w-4 ${
                              notification.type === 'success' ? 'text-accent' :
                              notification.type === 'info' ? 'text-primary' : 'text-destructive'
                            }`} />
                          ) : notification.type === 'info' ? (
                            <Calendar className="h-4 w-4 text-primary" />
                          ) : (
                            <Clock className="h-4 w-4 text-destructive" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground">{notification.message}</p>
                          <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'identity' && (
              <div className="space-y-8">
                <div className="card-stone">
                  <h3 className="text-xl font-semibold mb-6">Digital Identity Card</h3>
                  <div className="bg-gradient-quantum rounded-xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-20">
                      <QrCode className="h-32 w-32" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                          AS
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">Arjun Sharma</h4>
                          <p className="text-white/80">Citizen ID: QG-2024-789456</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-white/60">Date of Birth</p>
                          <p className="font-medium">15 March 1992</p>
                        </div>
                        <div>
                          <p className="text-white/60">Address</p>
                          <p className="font-medium">Mumbai, Maharashtra</p>
                        </div>
                        <div>
                          <p className="text-white/60">Status</p>
                          <Badge className="bg-white/20 text-white border-0">Verified</Badge>
                        </div>
                        <div>
                          <p className="text-white/60">Expires</p>
                          <p className="font-medium">March 2029</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs would have similar content structures */}
            {activeTab !== 'overview' && activeTab !== 'identity' && (
              <div className="card-stone text-center py-12">
                <h3 className="text-xl font-semibold mb-4">
                  {dashboardTabs.find(tab => tab.id === activeTab)?.name} Section
                </h3>
                <p className="text-muted-foreground mb-6">
                  This section is under development. More features coming soon.
                </p>
                <Button className="btn-quantum">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
