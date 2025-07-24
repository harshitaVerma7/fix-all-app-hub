import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    service: "Mobile Screen Repair",
    rating: 5,
    review: "Amazing service! My phone screen was replaced within 2 hours of booking. The technician was professional and the quality is excellent. Highly recommended!",
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    location: "Delhi, NCR",
    service: "AC Repair",
    rating: 5,
    review: "Our AC stopped working during peak summer. Booked through the app and got it fixed the same day. Transparent pricing and great service quality.",
    avatar: "PS"
  },
  {
    name: "Amit Patel",
    location: "Bangalore, Karnataka",
    service: "Laptop Repair",
    rating: 5,
    review: "My laptop had a motherboard issue. The technician diagnosed it accurately and fixed it at a reasonable price. Very satisfied with the service.",
    avatar: "AP"
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    service: "Plumbing Service",
    rating: 5,
    review: "Emergency plumbing issue at 11 PM. They sent someone immediately and solved the problem. The app made it so easy to book even at night!",
    avatar: "SR"
  },
  {
    name: "Vikram Singh",
    location: "Pune, Maharashtra",
    service: "Car Repair",
    rating: 5,
    review: "Engine trouble on a Sunday morning. Within 30 minutes, a mechanic was at my location. Fixed the issue and even gave maintenance tips. Excellent!",
    avatar: "VS"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers 
            across India have to say about our repair services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Review */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials - Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <div 
              key={index + 3} 
              className="bg-gradient-subtle rounded-lg p-6 shadow-card border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    "{testimonial.review}"
                  </p>
                  <div className="text-sm">
                    <span className="font-semibold text-card-foreground">{testimonial.name}</span>
                    <span className="text-muted-foreground"> • {testimonial.location}</span>
                    <div className="text-primary font-medium">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card rounded-lg p-6 shadow-card border border-border/50">
            <div className="text-4xl font-bold text-accent">4.8</div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">Average rating from 10,000+ customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;