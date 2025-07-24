import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      // Here you would normally send the form data
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our services? Need support? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-card border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {/* Customer Support */}
              <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Customer Support</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      24/7 support for all your queries and service requests
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-accent" />
                      <span className="text-foreground font-medium">+91 1800-123-4567</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Support */}
              <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Send us your queries and we'll respond within 24 hours
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">General:</span>
                        <span className="text-foreground font-medium">support@fixallapp.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Business:</span>
                        <span className="text-foreground font-medium">business@fixallapp.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Address */}
              <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Head Office</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Fix All App Hub Pvt. Ltd.<br />
                      123, Tech Park, Sector 18<br />
                      Gurugram, Haryana 122015<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-primary rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-accent" />
                <h4 className="font-semibold">Response Time</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Support Chat:</span>
                  <span className="text-accent font-medium">Instant</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone Support:</span>
                  <span className="text-accent font-medium">Within 2 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Email Support:</span>
                  <span className="text-accent font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Booking:</span>
                  <span className="text-accent font-medium">Within 30 minutes</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, name: "Facebook", color: "text-blue-600" },
                  { icon: Twitter, name: "Twitter", color: "text-blue-400" },
                  { icon: Instagram, name: "Instagram", color: "text-pink-600" },
                  { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
                  { icon: Youtube, name: "YouTube", color: "text-red-600" }
                ].map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className={`w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors ${social.color} hover:scale-110 transform transition-transform`}
                    >
                      <SocialIcon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;