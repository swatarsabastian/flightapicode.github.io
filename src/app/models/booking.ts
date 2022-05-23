import { Passenger } from "./passenger";

export class Booking {

    pnrId?:number;
    airlineId?:number;
    flightId?:number;
    tripeType?:string;
    paymentMode?:string;
    instrumnetsUsed?:string;
    createdDate?: Date;
    createdBy?: number;
    modifiedDate?: Date;
    modifiedBy?: number;
    passengers?:Passenger[];
}
 

      