export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  status: "Pending" | "Completed" | "Cancelled";
  totalPaid: number;
  salon: string;
}

export const initialBookings: Booking[] = [
  {
    id: "BK-1001",
    serviceId: "1",
    serviceName: "Classic Haircut",
    date: "2026-01-15",
    time: "10:00 AM",
    status: "Completed",
    totalPaid: 30,
    salon: "Hair Rap By YoYo",
  },
  {
    id: "BK-1002",
    serviceId: "2",
    serviceName: "Hair Coloring",
    date: "2026-01-20",
    time: "2:00 PM",
    status: "Completed",
    totalPaid: 80,
    salon: "Glamour Studio",
  },
  {
    id: "BK-1003",
    serviceId: "5",
    serviceName: "Blowout & Styling",
    date: "2026-02-01",
    time: "11:30 AM",
    status: "Cancelled",
    totalPaid: 45,
    salon: "Chic Hair Studio",
  },
  {
    id: "BK-1004",
    serviceId: "3",
    serviceName: "Hair Spa Treatment",
    date: "2026-02-10",
    time: "1:30 PM",
    status: "Pending",
    totalPaid: 60,
    salon: "Serenity Salon",
  },
  {
    id: "BK-1005",
    serviceId: "8",
    serviceName: "Keratin Treatment",
    date: "2026-02-15",
    time: "9:00 AM",
    status: "Pending",
    totalPaid: 150,
    salon: "Smooth & Shine",
  },
];
