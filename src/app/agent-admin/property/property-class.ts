import { FileHandle } from "./file-handle";

export class PropertyClass {
   
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
}

