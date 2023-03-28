import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { FileHandle } from '../file-handle';
import { PropertyClass } from '../property-class';
import { PropertyImageServiceService } from '../property-image-service.service';
import { ProservService } from '../proserv.service';

@Component({
  selector: 'app-add-new-property',
  templateUrl: './add-new-property.component.html',
  styleUrls: ['./add-new-property.component.css']
})
export class AddNewPropertyComponent implements OnInit {
  property: PropertyClass = {
    name: '',
    owner: '',
    price: 0,
    status: "",
    category: "",
    rating: 0,
    description: "",
    last_update: "",
    propertyImages: [],
    numLivingRoom: 0,
    numKitchen: 0,
    location: "",
    numBath: 0,
    numRoom: 0,
    area: 0,
    terms: "",
    nearbyPlaces: "",
  }
  id: any;
  constructor(private propertyService:ProservService,
    private sanitizer:DomSanitizer,
    private activatedRoute:ActivatedRoute,
    private imageProcessing:PropertyImageServiceService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.propertyService.getPropertyById(this.id)
    .pipe(
      map(p=>this.imageProcessing.createImages(p))
    )
    .subscribe(
  data=>{
    this.property = data;
  },
  (error) =>{
    console.log(error)
  }
)}

  
    
     


  addProperty(propertyForm:NgForm){
    const prepareFormData = this.prepareFormData(this.property)

    if(propertyForm.valid){
        this.propertyService.postAll(prepareFormData).subscribe({
  
          next: (res) => {
            alert("Data added successfully");
            console.log(res);
          },
          error: () => {
            alert("Data not added");
          }
        }
      )
    }
    else{
      alert("Form not complete")
    }
  }
  onFileSelectedEvent(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.property.propertyImages.push(fileHandle);
    }
  }
  removeImage(i: number) {
    this.property.propertyImages.splice(i, 1);
  }
  prepareFormData(property: PropertyClass): FormData {
    const formData = new FormData();
    formData.append(
      'property',
      new Blob([JSON.stringify(property)], { type: 'application/json' }));
    for (var i = 0; i < property.propertyImages.length; i++) {
      formData.append(
        'imageFile',
        property.propertyImages[i].file,
        property.propertyImages[i].file.name
      )
    }
    return formData;
  }

  fileDrop(fileHandle:FileHandle){
    this.property.propertyImages.push(fileHandle);
  }

}
