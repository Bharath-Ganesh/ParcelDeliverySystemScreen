
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ParcelcreationComponent } from './parcelcreation/parcelcreation.component';
import { ViewassignedorderComponent } from './viewassignedorder/viewassignedorder.component';
import { VieworderdetailsComponent } from './vieworderdetails/vieworderdetails.component';


@NgModule({
  declarations: [
    AppComponent,
 
    RegisterComponent,
    AdminComponent,
    AgentComponent,
    WelcomeComponent,
    LoginComponent,
    ParcelcreationComponent,
    ViewassignedorderComponent,
    VieworderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
