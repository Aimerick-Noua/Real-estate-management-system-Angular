import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AgentDasbComponent } from './agent-dasb/agent-dasb.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { AgentEmailComponent } from './agent-email/agent-email.component';



@NgModule({
  declarations: [
    AgentDasbComponent,
    AgentEmailComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    
    MatPaginatorModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
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
    MatGridListModule
  ]
})
export class AgentAdminModule { }
