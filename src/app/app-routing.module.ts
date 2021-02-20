import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { LoginComponent } from './login/login.component';
import { ParcelcreationComponent } from './parcelcreation/parcelcreation.component';
import { RegisterComponent } from './register/register.component';
import { ViewassignedorderComponent } from './viewassignedorder/viewassignedorder.component';
import { VieworderdetailsComponent } from './vieworderdetails/vieworderdetails.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
 
  {path:'welcome', component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'agent',component:AgentComponent},
  {path:'createParcel',component:ParcelcreationComponent},
  {path:'viewOrderDetails',component:VieworderdetailsComponent},
  {path:'viewassignedorders',component:ViewassignedorderComponent},
  {path:'',component:WelcomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
