import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomPreloadingStrategy} from './core/custom-preloading-strategy';




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {preload: false}
  },
  {
    path: 'features',
    pathMatch: 'full',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    data: {preload: false}
  },
  {
    path: 'pricing',
    pathMatch: 'full',
    loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule),
    data: {preload: true}
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
