import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AdminsUserListComponent} from './pages/admins-user-list/admins-user-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {NgOptimizedImage} from "@angular/common";
import {UserFilterPipe} from './models/User/user-filter.pipe';
import {FormsModule} from "@angular/forms";
import {CardCarComponent} from './pages/card-car/card-car.component';
import {MapComponent} from './pages/GeneralComponents/map/map.component';
import {GasStationListComponent} from './pages/home-page/gas-station-list/gas-station-list.component';
import {DataUserComponent} from './pages/GeneralComponents/data-user/data-user.component';
import {LoginComponent} from './pages/login/login/login.component';
import {FooterComponent} from './pages/footer/footer.component';
import {
  UserFormIconAndOptionsComponent
} from './pages/GeneralComponents/user-form-icon-and-options/user-form-icon-and-options.component';
import {HeaderMobileComponent} from './pages/header-mobile/header-mobile.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {GasInfoPageComponent} from './pages/gas-info-page/gas-info-page.component';
import {GasPriceListComponent} from './pages/GeneralComponents/gas-price-list/gas-price-list.component';
import {UserProfileViewComponent} from "./pages/user-profile-view/user-profile-view.component";
import { FormCarComponent } from './pages/form-car/form-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AdminsUserListComponent,
    AboutUsComponent,
    CardCarComponent,
    UserFilterPipe,
    MapComponent,
    GasStationListComponent,
    DataUserComponent,
    AboutUsComponent,
    LoginComponent,
    FooterComponent,
    UserFormIconAndOptionsComponent,
    HeaderMobileComponent,
    GasInfoPageComponent,
    GasPriceListComponent,
    UserProfileViewComponent,
    FormCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgOptimizedImage,
    GoogleMapsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
