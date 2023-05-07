import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AdminsUserListComponent} from "./pages/admins-user-list/admins-user-list.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {CardCarComponent} from "./pages/card-car/card-car.component";
import {LoginComponent} from "./pages/login/login/login.component";
import {UserProfileViewComponent} from "./pages/user-profile-view/user-profile-view.component";
import {GasInfoPageComponent} from "./pages/gas-info-page/gas-info-page.component";
import {FormPumpingComponent} from "./pages/GeneralComponents/Forms/form-pumping/form-pumping.component";
import {FormCarComponent} from "./pages/form-car/form-car.component";
import {UserRegistrationComponent} from "./pages/user-registration/user-registration.component";
import { FormReparationComponent} from "./pages/GeneralComponents/Forms/form-reparation/form-reparation.component";
import {CarProfileViewComponent} from "./pages/car-profile-view/car-profile-view.component";
import {UserProfileUpdateComponent} from "./pages/user-profile-update/user-profile-update.component";

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: "full"},
  {path: 'adminPage', component: AdminsUserListComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'cardCar', component: CardCarComponent},
  {path: 'gasStation', component: GasInfoPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userProfile', component: UserProfileViewComponent},
  {path: 'formCar', component:FormCarComponent},
  {path: 'formPumping', component:FormPumpingComponent},
  {path: 'formReparation', component:FormReparationComponent},
  {path: 'userRegistration', component:UserRegistrationComponent},
  {path: 'carView',component:CarProfileViewComponent},
  {path: 'userProfileEdit', component: UserProfileUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
