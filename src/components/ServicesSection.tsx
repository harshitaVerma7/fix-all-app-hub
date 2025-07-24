import { 
  Smartphone, 
  Laptop, 
  Zap, 
  Wrench, 
  Car, 
  Bike,
  Plug,
  Drill,
  Tv,
  Refrigerator,
  AirVent,
  Lightbulb
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile & Laptop Repair",
    description: "Screen replacements, software issues, water damage, and hardware repairs"
  },
  {
    icon: Tv,
    title: "Electronics & Home Appliances",
    description: "TV repair, refrigerator service, washing machine, and all electronic devices"
  },
  {
    icon: Wrench,
    title: "Plumbing & Electricians",
    description: "Leak repairs, pipe installation, electrical wiring, and emergency services"
  },
  {
    icon: Car,
    title: "Car, Bike & Cycle Repair",
    description: "Engine diagnostics, brake service, tire replacement, and maintenance"
  },
  {
    icon: Zap,
    title: "Line Man & Heavy Electrical",
    description: "Power line repairs, heavy electrical installations, and industrial support"
  },
  {
    icon: AirVent,
    title: "AC & Cooling Systems",
    description: "Installation, maintenance, gas refilling, and emergency cooling repairs"
  },
  {
    icon: Drill,
    title: "Home Maintenance",
    description: "Carpentry, painting, drilling, furniture assembly, and general repairs"
  },
  {
    icon: Lightbulb,
    title: "Smart Home Setup",
    description: "IoT device installation, smart lighting, security systems, and automation"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Complete Repair Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From smartphones to cars, from electronics to home appliances – 
            we've got skilled professionals for every repair need at your doorstep.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  <IconComponent size={48} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Can't find your specific repair need? We probably have it covered!
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <span>Download our app to explore all services</span>
            <Smartphone className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;