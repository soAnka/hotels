export interface Image {
  url: string;
}
interface Facility {
  code: string;
}
interface Coordinates {
  latitude: number;
  longtitude: number;
}

export interface IHotel {
  address1: string;
  address2: string;
  rooms: Room[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  country: string;
  countrCode: string;
  description: string;
  email: string;
  facilities: Facility[];
  id: string;
  images: Image[];
  name: string;
  position: Coordinates[];
  postcode: string;
  starRating: string;
  telephone: string;
  town: string;
}

export type dataHotels = Array<IHotel> | [];

export interface HotelsResponse {
  [index: number]: IHotel[];
}

interface IRatePlans {
  id: string;
  longDescription: string;
  prePayment: string;
  shortDescription: string;
}
interface RoomFacility {
  name: string;
  code: string;
}
interface Occupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}
export interface Room {
  bedConfiguration: string;
  disabledAccess: boolean;
  facilities: RoomFacility[];
  id: string;
  images: Image[];
  name: string;
  occupancy: Occupancy;
  shortDescription: string;
  longDescription: string;
}

export interface RoomsResponse {
  rooms: Room[];
  ratePlans: IRatePlans[];
}
