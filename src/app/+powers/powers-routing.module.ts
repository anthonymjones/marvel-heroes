import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './containers/edit/edit.component';
import { IndexComponent } from './containers/index/index.component';
import { PowerComponent } from './containers/power/power.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: ':id',
    component: EditComponent
  },
  {
    path: ':id/detail',
    component: PowerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowersRoutingModule {}
