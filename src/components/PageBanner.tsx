import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
}

const PageBanner = ({ title, breadcrumbs }: PageBannerProps) => (
  <div className="salon-gradient py-10">
    <div className="container mx-auto px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">{title}</h1>
      <div className="flex items-center gap-1 text-primary-foreground/70 text-sm">
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
            {crumb.path ? (
              <Link to={crumb.path} className="hover:text-primary-foreground transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-primary-foreground">{crumb.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default PageBanner;
