import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Mail, Phone, MapPin, Globe, Clock } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import BookingModal from "@/components/BookingModal";
import { services } from "@/data/services";
import { useBookings } from "@/context/BookingContext";
import { CalendarIcon } from "lucide-react";

const stylists = ["Any Stylist", "Sarah Johnson", "Mike Chen", "Priya Patel", "James Wilson"];

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useBookings();
  const service = services.find((s) => s.id === id);

  const [date, setDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState("");
  const [stylist, setStylist] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Service not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBook = () => {
    if (!date || !selectedSlot || !agreedTerms) return;
    addBooking({
      serviceId: service.id,
      serviceName: service.name,
      date: format(date, "yyyy-MM-dd"),
      time: selectedSlot,
      status: "Pending",
      totalPaid: service.price,
      salon: service.salon,
    });
    setBookingSuccess(true);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageBanner
        title="Book Appointment"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: service.name },
        ]}
      />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Salon Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-xl border border-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full salon-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {service.salon[0]}
                </div>
                <div>
                  <h3 className="font-semibold">{service.salon}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{service.rating}</span>
                    <span className="text-sm text-muted-foreground">({service.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" /> info@hairrapbyyoyo.com
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" /> +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {service.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" /> {service.duration}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="h-4 w-4" /> English, Spanish
                </div>
              </div>
            </div>

            {/* Service image */}
            <div className="rounded-xl overflow-hidden">
              <img src={service.image} alt={service.name} className="w-full h-56 object-cover" />
            </div>

            <div className="rounded-xl border border-border p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border p-6 md:p-8">
              <h2 className="text-xl font-bold mb-6">Book an Appointment</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label>First Name</Label>
                  <Input placeholder="John" className="mt-1" />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input placeholder="Doe" className="mt-1" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="john@email.com" className="mt-1" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="mt-1" />
                </div>
                <div>
                  <Label>Gender</Label>
                  <Select>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Stylist</Label>
                  <Select value={stylist} onValueChange={setStylist}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Any Stylist" /></SelectTrigger>
                    <SelectContent>
                      {stylists.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date picker */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal mt-1", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date()}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label>Time Slot</Label>
                  <Select value={selectedSlot} onValueChange={setSelectedSlot}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select time" /></SelectTrigger>
                    <SelectContent>
                      {service.availableSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <Label>Message (Optional)</Label>
                <Textarea placeholder="Any special requests..." className="mt-1" rows={3} />
              </div>

              {/* Price */}
              <div className="rounded-lg bg-secondary p-4 mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Service Price</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">${service.price}</span>
                    <span className="text-muted-foreground line-through">${service.originalPrice}</span>
                    <Badge className="bg-green-600 text-white">{service.discount}% OFF</Badge>
                  </div>
                </div>
              </div>

              <label className="flex items-center gap-2 mb-6 cursor-pointer">
                <Checkbox checked={agreedTerms} onCheckedChange={(v) => setAgreedTerms(v === true)} />
                <span className="text-sm text-muted-foreground">
                  I agree to the Terms & Conditions and Cancellation Policy
                </span>
              </label>

              <Button
                size="lg"
                className="w-full"
                disabled={!date || !selectedSlot || !agreedTerms}
                onClick={handleBook}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        success={bookingSuccess}
        serviceName={service.name}
        date={date ? format(date, "PPP") : ""}
        time={selectedSlot}
      />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
