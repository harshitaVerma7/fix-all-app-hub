import { 
  Download, 
  Search, 
  Calendar, 
  Home, 
  CreditCard,
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Download,
    title: "Download the App",
    description: "Get our app from Play Store or App Store. Quick registration with just your mobile number."
  },
  {
    step: "02",
    icon: Search,
    title: "Choose Repair Category",
    description: "Browse through 15+ service categories and select the specific repair service you need."
  },
  {
    step: "03", 
    icon: Calendar,
    title: "Book a Nearby Expert",
    description: "View available professionals near you, check ratings, and book instantly or schedule for later."
  },
  {
    step: "04",
    icon: Home,
    title: "Get Service at Doorstep",
    description: "Our verified professional arrives at your location with tools and genuine spare parts."
  },
  {
    step: "05",
    icon: CreditCard,
    title: "Pay Securely",
    description: "Make payment through the app after service completion. Digital receipt and warranty included."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Getting your devices and appliances repaired has never been easier. 
            Follow these simple steps to book professional repair services.
          </p>
        </div>

        {/* Steps for Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 z-0"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    {/* Step Circle */}
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant relative">
                      <IconComponent className="w-8 h-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Steps for Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                {/* Step Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-card relative">
                    <IconComponent className="w-6 h-6 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 self-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 lg:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">⚡</div>
              <h4 className="font-semibold text-foreground mb-1">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">Average booking time: Under 2 minutes</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">🛡️</div>
              <h4 className="font-semibold text-foreground mb-1">Fully Insured</h4>
              <p className="text-sm text-muted-foreground">All services covered by comprehensive insurance</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-2">✅</div>
              <h4 className="font-semibold text-foreground mb-1">Satisfaction Guaranteed</h4>
              <p className="text-sm text-muted-foreground">100% money-back guarantee on all services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;