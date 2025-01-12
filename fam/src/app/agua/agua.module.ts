import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts'; 
import { NgxGaugeModule } from 'ngx-gauge'
import { IonicModule } from '@ionic/angular';
import { AguaPage } from './agua.page';

const routes: Routes = [
  {
    path: '',
    component: AguaPage
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
  declarations: [AguaPage]
})
export class AguaPageModule {}
