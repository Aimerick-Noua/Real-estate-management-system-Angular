import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AgentClass } from '../../agents/agent-class';
import { ServiceService } from '../../agents/service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProservService } from '../proserv.service';
import { FileHandle } from '../file-handle';
import { DomSanitizer } from '@angular/platform-browser';
import { PropertyClass } from '../property-class';
@Component({
  selector: 'app-agents-dialog',
  templateUrl: './pdialog.component.html',
  styleUrls: ['./pdialog.component.css'],
})
export class PdialogComponent implements OnInit {

  price: number = 0;
  status = ['For Rent', 'For Sale'];
  actionBtn: string = "Save";
  property: PropertyClass = {
    name: '',
    owner: '',
    price: 0,
    status: '',
    location: '',
    category: '',
    rating: '',
    description: '',
    last_update: '',
    propertyImages: [],
    numLivingRoom: 0,
    numKitchen: 0,
    terms: '',
    area: 0,
    numBath: 0,
    numRoom: 0,
    nearbyPlaces: ''

  }
  constructor(private sanitizer: DomSanitizer, private formbuilder: FormBuilder,
    private http: ProservService, @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<PdialogComponent>) { }

  propertyForm: FormGroup = this.formbuilder.group({
    name: ['', Validators.required],
    owner: ['', Validators.required],
    price: ['', Validators.required],
    status: ['', Validators.required],
    location: ['', Validators.required],
    category: ['', Validators.required],
    rating: ['', Validators.required],
    description: ['', Validators.required],
    last_update: ['', Validators.required],
    numBath: ['', Validators.required],
    numLivingRoom: ['', Validators.required],
    numKitchen: ['', Validators.required],
    numRoom: ['', Validators.required],
    nearbyPlaces: ['', Validators.required],
  });
  ngOnInit(): void {


    if (this.editData) {
      console.log(this.editData);
      this.actionBtn = "Update";
      this.propertyForm.controls['name'].setValue(this.editData.name);
      this.propertyForm.controls['owner'].setValue(this.editData.owner);
      this.propertyForm.controls['price'].setValue(this.editData.price);
      this.propertyForm.controls['status'].setValue(this.editData.status);
      this.propertyForm.controls['location'].setValue(this.editData.location);
      this.propertyForm.controls['category'].setValue(this.editData.category);
      this.propertyForm.controls['numKitchen'].setValue(this.editData.numKitchen);
      this.propertyForm.controls['description'].setValue(this.editData.description);
      this.propertyForm.controls['last_update'].setValue(this.editData.last_update);
      this.propertyForm.controls['propertyImages'].setValue(this.editData.propertyImages);
      this.propertyForm.controls['numBath'].setValue(this.editData.numBath);
      this.propertyForm.controls['numRoom'].setValue(this.editData.numRoom);
      this.propertyForm.controls['numLivingRoom'].setValue(this.editData.numLivingRoom);
      this.propertyForm.controls['area'].setValue(this.editData.area);
    }
    console.log(this.editData);
  }


  saveProperty(propertiesForm: NgForm) {
    console.log(this.propertyForm);
    if (!this.editData) {
      console.log(this.property)
      const prepareFormData = this.prepareFormData(this.property)

      this.http.postAll(prepareFormData).subscribe({

        next: (res) => {
          alert("Data added successfully");
          console.log(res);
          this.dialogRef.close('save');
        },
        error: () => {
          alert("Data not added");
        }
      }
      )
    }
    else {
      this.updateAgent();
    }
  }
  updateAgent() {
    return this.http.updateAll(this.propertyForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert("Data updated successfully");
      },
      error: () => {
        alert("Error while updating data");
      }
    })
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

}
