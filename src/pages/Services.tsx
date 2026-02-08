import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Grid3X3, List, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/ServiceCard";
import { services, categories } from "@/data/services";

const ITEMS_PER_PAGE = 6;

const Services = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [minRating, setMinRating] = useState(0);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setPage(1);
  };

  const filtered = useMemo(() => {
    let result = services.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.salon.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(s.category);
      const matchPrice = s.price >= priceRange[0] && s.price <= priceRange[1];
      const matchRating = s.rating >= minRating;
      return matchSearch && matchCategory && matchPrice && matchRating;
    });

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [search, selectedCategories, priceRange, sortBy, minRating]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageBanner
        title="Our Services"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Services" }]}
      />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <Button
            variant="outline"
            className="lg:hidden gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          {/* Sidebar Filters */}
          <aside className={`lg:w-64 shrink-0 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div>
              <Label className="text-sm font-semibold mb-2 block">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  className="pl-9"
                />
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">Categories</Label>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={selectedCategories.includes(cat)}
                      onCheckedChange={() => toggleCategory(cat)}
                    />
                    <span className="text-sm text-muted-foreground">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </Label>
              <Slider
                min={0}
                max={400}
                step={10}
                value={priceRange}
                onValueChange={(val) => { setPriceRange(val); setPage(1); }}
              />
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block">Minimum Rating</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => { setMinRating(minRating === star ? 0 : star); setPage(1); }}
                    className="p-1"
                  >
                    <Star
                      className={`h-5 w-5 ${star <= minRating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">{filtered.length} services found</p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginated.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {paginated.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No services found matching your criteria.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Button
                    key={p}
                    variant={p === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
