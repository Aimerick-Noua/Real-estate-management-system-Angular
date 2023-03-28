import { Serializer } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { PropertyClass } from './admins/property/property-class';
import { PropertyImageServiceService } from './admins/property/property-image-service.service';
import { ProservService } from './admins/property/proserv.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyResolveService implements Resolve<PropertyClass>{

  constructor(private proser:ProservService,
    private imageProcessing:PropertyImageServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PropertyClass> {
    const id = route.paramMap.get("propertyId"); 
    if(id){
      return this.proser.getPropertyById(id).pipe(
        map(p=>this.imageProcessing.createImages(p))
      );
      console.log(id)

    }
    else{
      return of(this.getPropertyDetails());
      console.log("else")
    } 

  }
 
  getPropertyDetails(){
    return{
      name: '',
      owner:'',
      price:0,
      status:"",
      category:"",
      rating:0,
      description:"",
      last_update:"",
      propertyImages: [], 
      numLivingRoom:0,
      numKitchen:0,  
      location:"",
      numBath:0,
      numRoom:0,
      area:0,
      terms:"",
      nearbyPlaces:"",
    }
  }
}
