import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg text-background mb-4">Hair Rap By YoYo</h3>
            <p className="text-sm leading-relaxed">
              Premium salon services with expert stylists. Transform your look with our
              professional hair care solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/my-bookings" className="hover:text-primary transition-colors">My Bookings</Link></li>
              <li><Link to="/ai-chat" className="hover:text-primary transition-colors">AI Assistant</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Newsletter</h4>
            <p className="text-sm mb-3">Subscribe for updates and exclusive offers.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-9" />
              <Button size="sm" className="h-9">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-6 text-center text-sm">
          © 2026 Hair Rap By YoYo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
