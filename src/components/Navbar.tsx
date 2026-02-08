import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "#" },
  { label: "Contact", path: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full salon-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">HR</span>
          </div>
          <span className="font-bold text-lg text-foreground">Hair Rap By YoYo</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/ai-chat">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/my-bookings">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" size="sm">Login</Button>
          <Button size="sm">Register</Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">Login</Button>
            <Button size="sm" className="flex-1">Register</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
