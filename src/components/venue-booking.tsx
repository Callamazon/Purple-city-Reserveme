import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useNavigate } from "react-router-dom";

// Simulated available time slots
const TIME_SLOTS = Array.from({ length: 12 }, (_, i) => {
  const hour = i + 8; // Start from 8 AM
  return {
    start: `${hour}:00`,
    end: `${hour + 1}:00`,
    available: Math.random() > 0.3, // Randomly set availability
  };
});

interface VenueBookingProps {
  price: number;
}

const VenueBooking = ({ price }: VenueBookingProps) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<(typeof TIME_SLOTS)[0]>();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateAmount = (slot: (typeof TIME_SLOTS)[number]) => {
    setTotalAmount(price);
  };

  const handleProceedToPayment = () => {
    // Implement payment logic here
    alert(`Proceeding to payment of $${totalAmount}`);
    navigate("/receipt");
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900">Book Your Slot</h2>
        <p className="text-sm text-gray-500">
          Select a date and time to book the venue
        </p>
      </div>
      <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-1">
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-gray-200 p-3"
            classNames={{
              months:
                "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-medium",
              nav: "space-x-1 flex items-center",
              nav_button:
                "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell:
                "text-rose-600 rounded-md w-9 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "h-9 w-9 text-center text-sm p-0 relative",
              day: "h-9 w-9 p-0 font-normal",
              day_selected:
                "bg-rose-600 text-white rounded-md hover:bg-rose-600",
              day_today: "bg-gray-100 text-gray-900 rounded-md",
              day_outside: "text-gray-400",
              day_disabled: "text-gray-400 opacity-50",
              day_hidden: "invisible",
            }}
          />
        </div>
        {date && (
          <div className="space-y-4">
            <div className="font-medium text-gray-900">
              Available times for {format(date, "MMMM do, yyyy")}:
            </div>
            <div className="h-[300px] overflow-auto rounded-md border border-gray-200 p-4">
              <div className="grid gap-2">
                {TIME_SLOTS.map((slot, i) => (
                  <button
                    key={i}
                    disabled={!slot.available}
                    onClick={() => {
                      setSelectedSlot(slot);
                      calculateAmount(slot);
                    }}
                    className={`w-full rounded-md border p-2 text-left transition-colors ${
                      !slot.available
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-rose-600 hover:text-white"
                    } ${
                      selectedSlot === slot
                        ? "bg-rose-600 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    {slot.start} - {slot.end}
                  </button>
                ))}
              </div>
            </div>
            {selectedSlot && (
              <>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-medium text-gray-900">Booking Summary</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    You are booking for {format(date, "MMMM do, yyyy")},{" "}
                    {selectedSlot.start} - {selectedSlot.end}
                  </p>
                  <p className="mt-2 text-sm text-gray-800">
                    Total Amount: ${totalAmount}
                  </p>
                </div>
                <button
                  onClick={handleProceedToPayment}
                  className="mt-4 w-full rounded-md bg-rose-600 text-white p-2 hover:bg-rose-700"
                >
                  Proceed to Payment
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueBooking;
