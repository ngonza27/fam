import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',loadChildren: './home/home.module#HomePageModule'},
  { path: 'agua', loadChildren: './agua/agua.module#AguaPageModule' },
  { path: 'energia', loadChildren: './energia/energia.module#EnergiaPageModule' },
  { path: 'seguridad', loadChildren: './seguridad/seguridad.module#SeguridadPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
