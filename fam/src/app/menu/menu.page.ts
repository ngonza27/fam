import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router" 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() { }

  agua() { this.router.navigate(['/agua']); }
  energia() { this.router.navigate(['/energia']); }
  seguridad() { this.router.navigate(['/seguridad']); }
  luces() { this.router.navigate(['/luces']); }
  historial() { this.router.navigate(['/historial']); }
  otros() { this.router.navigate(['/otros']); }
  configuracion_disp() { this.router.navigate(['/configuracion-disp']); }
  configuracion_agua_energia() { this.router.navigate(['/configuracion-agua-energia']); }
  configuracion_wifi() { this.router.navigate(['/configuracion-wifi']); }
  configuracion_usuario() { this.router.navigate(['/configuracion-usuario']); }
}
