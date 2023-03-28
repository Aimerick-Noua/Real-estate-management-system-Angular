import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomePageComponent } from './home-page/home-page.component';
import { LandlordDashbComponent } from './landlord-dashb/landlord-dashb.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminsModule } from './admins/admins.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componentTools/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './property/details/details.component';
import { GaugeModule } from 'angular-gauge';
import { PropertyImageServiceService } from './admins/property/property-image-service.service';
import { ProservService } from './admins/property/proserv.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchBarComponent } from './componentTools/search-bar/search-bar.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { userServiceService } from './admins/users/userService.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AgentAdminComponent } from './agent-admin/agent-admin.component';
import { AgentAdminModule } from './agent-admin/agent-admin.module';
import { AdminGuard } from './gaurd/admin.guard';
import { AgentGuard } from './gaurd/agent.guard';
import { MychartsComponent } from './mycharts/mycharts.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
@NgModule({

  declarations: [
    AppComponent,
    HomePageComponent,
    LandlordDashbComponent,
    RegisterComponent,
    SignInComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
    HomeComponent,
    DetailsComponent,
    SearchBarComponent,
    ForbiddenComponent,
    NavbarComponent,
    AgentAdminComponent,
    MychartsComponent,
    FooterComponent,
    ContactFormComponent,
    PaymentComponent,
    ContactPageComponent
  ],
  imports: [
    AdminsModule,
    AgentAdminModule,
    MatDialogModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatIconModule,
    GaugeModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers:  [
    AdminGuard,
    AgentGuard,
  AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  userServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
