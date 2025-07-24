import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Zap, 
  Heart,
  MapPin,
  TrendingUp 
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Revolutionizing Repair Services
              <span className="text-primary block">Across India</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We started with a simple mission: to make professional repair services accessible, 
              reliable, and affordable for everyone. What began as a small startup has now grown 
              into India's most trusted repair service platform.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our platform connects skilled technicians with customers who need immediate repair solutions. 
              We're not just fixing devices and appliances – we're creating sustainable livelihoods for 
              thousands of professionals while solving everyday problems for millions of families.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To bridge the gap between skilled repair professionals and customers through 
                    technology, ensuring quality service delivery at fair prices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To become India's largest repair service ecosystem, empowering technicians 
                    and providing instant solutions to every household and business.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              <Users className="w-5 h-5" />
              Join Our Community
            </Button>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="space-y-6">
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-6 text-center shadow-card border border-border/50">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-card border border-border/50">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Expert Technicians</div>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-card border border-border/50">
                <Zap className="w-8 h-8 text-success mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Repairs Completed</div>
              </div>
              <div className="bg-card rounded-lg p-6 text-center shadow-card border border-border/50">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-hero rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Created 500+ direct employment opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Saved customers ₹2+ crores in repair costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Reduced e-waste by promoting repairs over replacements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Partnership with 100+ local repair shops</span>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4">Our Values</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="text-xs font-medium text-muted-foreground">Quality First</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="text-xs font-medium text-muted-foreground">Trust & Integrity</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-xs font-medium text-muted-foreground">Speed & Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;