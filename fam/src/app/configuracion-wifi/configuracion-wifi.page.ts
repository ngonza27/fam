import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router" 

@Component({
  selector: 'app-configuracion-wifi',
  templateUrl: './configuracion-wifi.page.html',
  styleUrls: ['./configuracion-wifi.page.scss'],
})
export class ConfiguracionWifiPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/menu']);
  }
}