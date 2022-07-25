import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PricingComponent} from './pricing.component';
import {RouterModule, Routes} from '@angular/router';

const pricingRoutes: Routes = [
  {path: '', pathMatch: 'full', component: PricingComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pricingRoutes)
  ]
})
export class PricingModule { }
