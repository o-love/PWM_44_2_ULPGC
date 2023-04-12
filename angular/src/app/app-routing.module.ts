import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AdminsUserListComponent} from "./pages/admins-user-list/admins-user-list.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {CardCarComponent} from "./pages/card-car/card-car.component";
import {DataUserComponent} from "./pages/GeneralComponents/data-user/data-user.component";
import {LoginComponent} from "./pages/login/login/login.component";
import {GasStationListComponent} from "./pages/home-page/gas-station-list/gas-station-list.component";

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: "full"},
  {path: 'adminPage', component: AdminsUserListComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'cardCar', component: CardCarComponent},
  {path: 'dataUser', component: DataUserComponent},
  {path: 'cardCar', component: CardCarComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: GasStationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
