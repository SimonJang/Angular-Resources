import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     loadChildren: 'app/heroes/heroes.module#HeroesModule' }
];

export const routing = RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules});
