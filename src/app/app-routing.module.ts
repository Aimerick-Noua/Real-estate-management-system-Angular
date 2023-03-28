import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { AgentsComponent } from './admins/agents/agents.component';
import { ChartsComponent } from './admins/charts/charts.component';
import { DashbComponent } from './admins/dashb/dashb.component';
import { EmailComponent } from './admins/email/email.component';
import { ReadMailComponent } from './admins/email/read-mail/read-mail.component';
import { AddNewPropertyComponent } from './admins/property/add-new-property/add-new-property.component';
import { PdialogComponent } from './admins/property/pdialog/pdialog.component';
import { PropertyComponent } from './admins/property/property.component';
import { UsersComponent } from './admins/users/users.component';
import { AgentAdminComponent } from './agent-admin/agent-admin.component';
import { AgentDasbComponent } from './agent-admin/agent-dasb/agent-dasb.component';
import { AgentEmailComponent } from './agent-admin/agent-email/agent-email.component';
import { HomeComponent } from './componentTools/home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminGuard } from './gaurd/admin.guard';
import { AgentGuard } from './gaurd/agent.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LandlordDashbComponent } from './landlord-dashb/landlord-dashb.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import { PropertyResolveService } from './property-resolve.service';
import { DetailsComponent } from './property/details/details.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'search', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'passrecov', component: RecoverPasswordComponent },
  { path: 'navbar', component: NavbarComponent },
  {
    path: 'admins', component: AdminsComponent, canActivateChild: [AdminGuard], data: { roles: ['Admin'] },

    resolve: {
      property: PropertyResolveService,
    },
    children: [
      { path: 'property', component: PropertyComponent },
      { path: 'dashb', component: DashbComponent },
      { path: 'agents', component: AgentsComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'pdialog', component: PdialogComponent },
      { path: 'addnewp/:id', component: AddNewPropertyComponent },
      { path: 'addnewp', component: AddNewPropertyComponent },
      { path: 'email', component: EmailComponent },
      { path: 'readmail/:id', component: ReadMailComponent }
    ]
  },
  { path: 'pdialog', component: PdialogComponent },

  {
    path: 'agentAdmin', component: AgentAdminComponent, canActivateChild: [AgentGuard], data: { roles: ['Agent'] }, children: [
      { path: 'property', component: PropertyComponent },
      { path: 'agentdasb', component: AgentDasbComponent },
      { path: 'agentemail', component: AgentEmailComponent }

    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'search/:searchItem', component: HomeComponent },
  { path: 'user', component: HomeComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'payment', component: PaymentComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
