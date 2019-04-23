import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReiniciarContrasenaPage } from './reiniciar-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: ReiniciarContrasenaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReiniciarContrasenaPage]
})
export class ReiniciarContrasenaPageModule {}
