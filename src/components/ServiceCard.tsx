import { Heart, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/data/services";
import { useState } from "react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
          {service.category}
        </Badge>
        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`} />
        </button>
        {service.discount > 0 && (
          <Badge className="absolute bottom-3 left-3 bg-green-600 text-white text-xs">
            {service.discount}% OFF
          </Badge>
        )}
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground">{service.name}</h3>
        <p className="text-sm text-muted-foreground">{service.salon}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>{service.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{service.rating}</span>
          <span className="text-sm text-muted-foreground">({service.reviews})</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">${service.price}</span>
            <span className="text-sm text-muted-foreground line-through">${service.originalPrice}</span>
          </div>
          <Link to={`/services/${service.id}`}>
            <Button size="sm">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
