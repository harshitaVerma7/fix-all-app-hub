import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Download,
  Smartphone,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Latest Offers
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive discounts, 
              service updates, and repair tips delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button 
                onClick={handleSubscribe}
                variant="cta"
                disabled={isSubscribed}
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Fix All App Hub</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              India's most trusted repair service platform. Connecting skilled 
              professionals with customers for instant doorstep solutions.
            </p>
            
            {/* App Download Buttons */}
            <div className="space-y-3">
              <Button variant="app" size="sm" className="w-full justify-start bg-background/10 hover:bg-background/20 border border-background/20">
                <Download className="w-4 h-4" />
                Get it on Play Store
              </Button>
              <Button variant="app" size="sm" className="w-full justify-start bg-background/10 hover:bg-background/20 border border-background/20">
                <Smartphone className="w-4 h-4" />
                Download on App Store
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Services", 
                "How It Works",
                "Become a Partner",
                "Career Opportunities",
                "Press & Media",
                "Investor Relations"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "FAQs",
                "Contact Support",
                "Service Locations",
                "Warranty Policy",
                "Terms & Conditions",
                "Privacy Policy"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Customer Support</p>
                  <p className="text-muted-foreground text-sm">+91 1800-123-4567</p>
                  <p className="text-xs text-muted-foreground">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Email Support</p>
                  <p className="text-muted-foreground text-sm">support@fixallapp.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Head Office</p>
                  <p className="text-muted-foreground text-sm">
                    123, Tech Park, Sector 18<br />
                    Gurugram, Haryana 122015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, name: "Facebook" },
                  { icon: Twitter, name: "Twitter" },
                  { icon: Instagram, name: "Instagram" },
                  { icon: Linkedin, name: "LinkedIn" },
                  { icon: Youtube, name: "YouTube" }
                ].map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className="w-9 h-9 rounded-lg bg-background/10 hover:bg-accent hover:text-white flex items-center justify-center transition-all"
                      aria-label={social.name}
                    >
                      <SocialIcon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Service Areas */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-1">Available in 25+ cities across India</p>
              <p className="text-xs text-muted-foreground">
                Mumbai • Delhi • Bangalore • Hyderabad • Chennai • Pune • Kolkata • Ahmedabad & more
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/20 mt-8 pt-6 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Fix All App Hub Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;