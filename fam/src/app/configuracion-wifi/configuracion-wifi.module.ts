import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionWifiPage } from './configuracion-wifi.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionWifiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfiguracionWifiPage]
})
export class ConfiguracionWifiPageModule {}
