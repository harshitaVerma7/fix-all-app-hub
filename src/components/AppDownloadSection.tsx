import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Download, 
  Smartphone, 
  QrCode, 
  Send,
  CheckCircle,
  Star
} from "lucide-react";

const AppDownloadSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendLink = () => {
    if (phoneNumber.length >= 10) {
      setIsSubmitted(true);
      // Here you would normally send the SMS
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get the App & Book 
              <span className="text-accent block">Instantly!</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust our app for all their repair needs. 
              Download now and get your first service at a special discount!
            </p>

            {/* App Features */}
            <div className="space-y-4 mb-8">
              {[
                "Book services in under 60 seconds",
                "Track your technician in real-time",
                "Secure in-app payments",
                "Rate and review professionals",
                "24/7 customer support chat"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="cta" 
                size="lg" 
                className="flex-1 bg-accent hover:bg-accent-hover"
              >
                <Download className="w-5 h-5" />
                Get it on Play Store
              </Button>
              <Button 
                variant="app" 
                size="lg" 
                className="flex-1 bg-white text-primary hover:bg-gray-100"
              >
                <Smartphone className="w-5 h-5" />
                Download on App Store
              </Button>
            </div>

            {/* SMS Download Link */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-accent" />
                Get Download Link via SMS
              </h3>
              <div className="flex gap-3">
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
                <Button 
                  onClick={handleSendLink}
                  variant="cta"
                  className="bg-accent hover:bg-accent-hover"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? <CheckCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                </Button>
              </div>
              {isSubmitted && (
                <p className="text-accent text-sm mt-2">✓ Download link sent successfully!</p>
              )}
            </div>
          </div>

          {/* Right Column - QR Code & App Preview */}
          <div className="text-center">
            {/* QR Code */}
            <div className="bg-white rounded-2xl p-8 inline-block mb-6 shadow-glow">
              <QrCode className="w-32 h-32 text-primary mx-auto mb-4" />
              <p className="text-primary font-medium">Scan to Download</p>
            </div>

            {/* Rating */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-sm mx-auto">
              <div className="flex justify-center items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-accent text-2xl font-bold mb-1">4.8/5</p>
              <p className="text-gray-200 text-sm">Based on 10,000+ reviews</p>
            </div>

            {/* Special Offer */}
            <div className="mt-6 bg-accent/20 border border-accent/50 rounded-lg p-4">
              <p className="text-accent font-semibold">🎉 Limited Time Offer</p>
              <p className="text-white text-sm">Get 20% off on your first booking!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;