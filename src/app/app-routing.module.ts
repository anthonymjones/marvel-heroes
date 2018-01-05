import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'groups',
    loadChildren: 'app/+groups/groups.module#GroupsModule',
  },
  {
    path: 'heroes',
    loadChildren: 'app/+heroes/heroes.module#HeroesModule',
  },
  {
    path: 'powers',
    loadChildren: 'app/+powers/powers.module#PowersModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
