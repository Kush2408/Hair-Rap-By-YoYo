import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Star, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/images/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-4 leading-tight">
              Transform Your Look With Expert Care
            </h1>
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Experience premium salon services at Hair Rap By YoYo. Our skilled stylists bring
              your vision to life with precision and passion.
            </p>
            <div className="flex gap-4">
              <Link to="/services">
                <Button size="lg" className="gap-2">
                  Explore Services <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/ai-chat">
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10">
                  AI Assistant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Scissors, value: "50+", label: "Expert Stylists" },
              { icon: Users, value: "10K+", label: "Happy Clients" },
              { icon: Star, value: "4.9", label: "Average Rating" },
              { icon: Scissors, value: "12+", label: "Services" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <stat.icon className="h-8 w-8 text-primary mx-auto" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">About Hair Rap By YoYo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded with a passion for transformative hair care, Hair Rap By YoYo has been the go-to
            destination for those seeking premium salon experiences in New York City. Our team of
            internationally trained stylists combines artistry with the latest techniques.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From classic cuts to avant-garde coloring, bridal styling to therapeutic treatments —
            we offer a comprehensive range of services tailored to your unique style and needs.
          </p>
          <Link to="/services">
            <Button size="lg" className="gap-2">
              Explore Our Services <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
