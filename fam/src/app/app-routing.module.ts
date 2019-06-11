import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',loadChildren: './home/home.module#HomePageModule'},
  { path: 'agua', loadChildren: './agua/agua.module#AguaPageModule' },
  { path: 'energia', loadChildren: './energia/energia.module#EnergiaPageModule' },
  { path: 'seguridad', loadChildren: './seguridad/seguridad.module#SeguridadPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'configuracion-disp', loadChildren: './configuracion-disp/configuracion-disp.module#ConfiguracionDispPageModule' },
  { path: 'configuracion-wifi', loadChildren: './configuracion-wifi/configuracion-wifi.module#ConfiguracionWifiPageModule' },
  { path: 'luces', loadChildren: './luces/luces.module#LucesPageModule' },
  { path: 'configuracion-agua-energia', loadChildren: './configuracion-agua-energia/configuracion-agua-energia.module#ConfiguracionAguaEnergiaPageModule' },
  { path: 'configuracion-usuario', loadChildren: './configuracion-usuario/configuracion-usuario.module#ConfiguracionUsuarioPageModule' },
  { path: 'historial', loadChildren: './historial/historial.module#HistorialPageModule' },
  { path: 'otros', loadChildren: './otros/otros.module#OtrosPageModule' },
  { path: 'registrar', loadChildren: './registrar/registrar.module#RegistrarPageModule' },
  { path: 'reiniciar-contrasena', loadChildren: './reiniciar-contrasena/reiniciar-contrasena.module#ReiniciarContrasenaPageModule' },
  { path: 'apphome', loadChildren: './apphome/apphome.module#ApphomePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
