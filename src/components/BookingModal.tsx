import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  success: boolean;
  serviceName: string;
  date: string;
  time: string;
}

const BookingModal = ({ open, onClose, success, serviceName, date, time }: BookingModalProps) => {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader className="items-center">
          {success ? (
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-2" />
          ) : (
            <XCircle className="h-16 w-16 text-destructive mx-auto mb-2" />
          )}
          <DialogTitle className="text-xl">
            {success ? "Booking Confirmed!" : "Booking Failed"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {success
              ? `Your appointment for ${serviceName} on ${date} at ${time} has been confirmed.`
              : "Something went wrong. Please try again."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 justify-center mt-4">
          {success && (
            <Button onClick={() => { onClose(); navigate("/my-bookings"); }}>
              View Bookings
            </Button>
          )}
          <Button variant="outline" onClick={onClose}>
            {success ? "Close" : "Try Again"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
