import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AdminsUserListComponent} from "./pages/admins-user-list/admins-user-list.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: "full"},
  {path: 'adminPage', component: AdminsUserListComponent},
  {path: 'aboutUs', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
