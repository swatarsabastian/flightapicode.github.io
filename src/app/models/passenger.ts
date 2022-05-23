import { Booking } from "./booking";

export class Passenger {
    passengerId?: number;
    bookingsPNRId?: number;
    name?: string;
    gender?: string;
    emailId?: string;
    seatNo?: string;
    seatType?: string;
    status?: string;
    mealPreference?: string;
    price?: number;
    totalPrice?: number;
    scheduleid?: number;
    discountId?: number;
    createdDate?: Date;
    createdBy?: number;
    modifiedDate?: Date;
    modifiedBy?: number;
    bookings?: Booking;
}
