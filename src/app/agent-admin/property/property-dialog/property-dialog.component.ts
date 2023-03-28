import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from '../file-handle';

@Component({
  selector: 'app-property-dialog',
  templateUrl: './property-dialog.component.html',
  styleUrls: ['./property-dialog.component.css']
})
export class PropertyDialogComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.recieveImages();
  }
  recieveImages(){
    console.log(this.data);
  }

}
