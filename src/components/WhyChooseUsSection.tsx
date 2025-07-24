import { 
  Shield, 
  Clock, 
  Wrench, 
  CreditCard, 
  MapPin, 
  Star,
  CheckCircle,
  Users
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All technicians are background-checked, certified, and highly rated by customers"
  },
  {
    icon: Clock,
    title: "30-Min Fast Booking",
    description: "Book any repair service instantly and get professionals at your doorstep within 30 minutes"
  },
  {
    icon: Wrench,
    title: "All-in-One Repair Service",
    description: "From mobile screens to car engines – one app for all your repair and maintenance needs"
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden charges. See exact costs upfront with detailed breakdowns and service warranties"
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your assigned technician's location and estimated arrival time in real-time"
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee with warranty on all repairs and free follow-up support"
  }
];

const stats = [
  { number: "50,000+", label: "Happy Customers" },
  { number: "500+", label: "Expert Technicians" },
  { number: "15+", label: "Service Categories" },
  { number: "4.8★", label: "Average Rating" }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Our Service?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing the repair industry with technology, trust, and transparency. 
            Here's what makes us the preferred choice for thousands of customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-2xl md:text-4xl font-bold mb-2 text-accent">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Insured Services</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;