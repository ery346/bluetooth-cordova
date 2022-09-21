import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputTextPage } from './input-text.page';

const routes: Routes = [
  {
    path: '',
    component: InputTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputTextPageRoutingModule {}
