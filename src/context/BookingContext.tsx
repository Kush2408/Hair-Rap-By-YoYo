import React, { createContext, useContext, useState, ReactNode } from "react";
import { Booking, initialBookings } from "@/data/bookings";

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, "id">) => void;
  cancelBooking: (id: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);

  const addBooking = (booking: Omit<Booking, "id">) => {
    const newBooking: Booking = {
      ...booking,
      id: `BK-${1000 + bookings.length + 1}`,
    };
    setBookings((prev) => [newBooking, ...prev]);
  };

  const cancelBooking = (id: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "Cancelled" } : b))
    );
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBookings must be inside BookingProvider");
  return ctx;
};
