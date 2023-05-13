import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasInfoPage } from './gas-info.page';

const routes: Routes = [
  {
    path: '',
    component: GasInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasInfoPageRoutingModule {}
