import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddressComponent } from './address/address.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'students',component:StudentComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent,
  children:[
    {path:'address',component:AddressComponent},
    {path:'phone',component:PhonenumberComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
