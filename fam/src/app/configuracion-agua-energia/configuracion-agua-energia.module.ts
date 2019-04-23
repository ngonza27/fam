import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionAguaEnergiaPage } from './configuracion-agua-energia.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionAguaEnergiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfiguracionAguaEnergiaPage]
})
export class ConfiguracionAguaEnergiaPageModule {}
