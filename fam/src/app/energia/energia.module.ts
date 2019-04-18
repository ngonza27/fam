import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnergiaPage } from './energia.page';

import { NgxChartsModule } from '@swimlane/ngx-charts'; 
import { NgxGaugeModule } from 'ngx-gauge'
const routes: Routes = [
  {
    path: '',
    component: EnergiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxGaugeModule,
    NgxChartsModule
  ],
  declarations: [EnergiaPage]
})
export class EnergiaPageModule {}
