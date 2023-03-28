import { FileHandle } from "./FileHandle";

export class PropertyClass {
  map(arg0: (property: PropertyClass) => import("../admins/property/property-class").PropertyClass): any {
    throw new Error('Method not implemented.');
  }
     
    name!: string;
    owner!:string;
    price!:number;
    status!:string;
    category!:string;
    rating!:string;
    description!:string;
    last_update!:string;
    propertyImages!: FileHandle[]; 
    numLivingRoom!:number;
    numKitchen!:number;  
    location!:string;
    numBath!:number;
    numRoom!:number;
    area!:number;
    terms!:string;
    nearbyPlaces!:string;
  property: any;
}
