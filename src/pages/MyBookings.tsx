import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Calendar, Heart, Wallet, Star, MessageSquare, Settings, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { useBookings } from "@/context/BookingContext";

const sidebarNav = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Calendar, label: "Bookings", active: true },
  { icon: Heart, label: "Favorites", active: false },
  { icon: Wallet, label: "Wallet", active: false },
  { icon: Star, label: "Reviews", active: false },
  { icon: MessageSquare, label: "AI Assistant", path: "/ai-chat", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const MyBookings = () => {
  const { bookings, cancelBooking } = useBookings();
  const [tab, setTab] = useState("all");
  const navigate = useNavigate();

  const filteredBookings = tab === "all"
    ? bookings
    : bookings.filter((b) => b.status.toLowerCase() === tab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700 border-green-200";
      case "Cancelled": return "bg-red-100 text-red-700 border-red-200";
      case "Pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageBanner
        title="My Dashboard"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Customer" },
          { label: "Dashboard" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="rounded-xl border border-border p-6 mb-6 text-center">
              <div className="w-16 h-16 rounded-full salon-gradient flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-3">
                JD
              </div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">Member since Jan 2025</p>
            </div>
            <nav className="rounded-xl border border-border overflow-hidden">
              {sidebarNav.map((item, i) => (
                <button
                  key={i}
                  onClick={() => item.path ? navigate(item.path) : undefined}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors border-b border-border last:border-0 ${
                    item.active ? "bg-accent text-primary font-medium" : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-destructive hover:bg-destructive/5 transition-colors">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <Tabs value={tab} onValueChange={setTab}>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <TabsList>
                  <TabsTrigger value="all">All ({bookings.length})</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={tab} className="mt-0">
                <div className="rounded-xl border border-border overflow-hidden">
                  {/* Header */}
                  <div className="hidden md:grid grid-cols-6 gap-4 px-4 py-3 bg-secondary text-sm font-medium text-muted-foreground">
                    <span>Service</span>
                    <span>Booking ID</span>
                    <span>Date & Time</span>
                    <span>Total Paid</span>
                    <span>Status</span>
                    <span>Action</span>
                  </div>

                  {filteredBookings.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">No bookings found.</div>
                  )}

                  {filteredBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="grid grid-cols-1 md:grid-cols-6 gap-4 px-4 py-4 border-t border-border items-center text-sm"
                    >
                      <span className="font-medium">{booking.serviceName}</span>
                      <span className="text-muted-foreground">{booking.id}</span>
                      <span className="text-muted-foreground">{booking.date} • {booking.time}</span>
                      <span className="font-medium">${booking.totalPaid}</span>
                      <div>
                        <Badge variant="outline" className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>
                      <div>
                        {booking.status === "Pending" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive border-destructive/30 hover:bg-destructive/5"
                            onClick={() => cancelBooking(booking.id)}
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyBookings;
