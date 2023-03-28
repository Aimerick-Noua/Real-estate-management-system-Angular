import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsComponent } from './admins.component';
import { DashbComponent } from './dashb/dashb.component';
import { ChartsComponent } from './charts/charts.component';
import { AgentsComponent } from './agents/agents.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AgentsDialogComponent } from './agent/agents-dialog/agents-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import{MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { UsersComponent } from './users/users.component';
import { UserdialogComponent } from './users/userdialog/userdialog.component';
import { PropertyComponent } from './property/property.component';
import {MatStepperModule} from '@angular/material/stepper';
import{MatGridListModule} from '@angular/material/grid-list'
import { PropertyDialogComponent } from './property/property-dialog/property-dialog.component';
import { SearchBarComponent } from '../componentTools/search-bar/search-bar.component';
import { EmailComponent } from './email/email.component';
import { ReadMailComponent } from './email/read-mail/read-mail.component';
import { AddNewPropertyComponent } from './property/add-new-property/add-new-property.component';
import { DragDirective } from './property/drag.directive';


@NgModule({
  declarations: [
    AdminsComponent,
    DashbComponent,
    ChartsComponent,
    AgentsComponent,
    AgentsDialogComponent,
    UsersComponent,
    UserdialogComponent,
    PropertyComponent,
  
    PropertyDialogComponent,
    EmailComponent,
    ReadMailComponent,
    AddNewPropertyComponent,
    DragDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    MatGridListModule

  ],
  entryComponents: [AgentsDialogComponent]
})
export class AdminsModule { }
