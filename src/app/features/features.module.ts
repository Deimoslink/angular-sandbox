import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeaturesComponent} from './features.component';


const featuresRoutes: Routes = [
  {path: '', pathMatch: 'full', component: FeaturesComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(featuresRoutes)
  ]
})
export class FeaturesModule { }
