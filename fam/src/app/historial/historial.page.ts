import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthserviceService} from "../providers/authservice.service";
import {Router} from "@angular/router" 
import { single } from './data';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  single: any[];
  multi: any[];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Servicio';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad';

  colorScheme = {
    domain: ['#3D5AFE', '#78cffd']
  };

  constructor(private httClient : HttpClient,private authService: AuthserviceService,private router:Router)  {
    Object.assign(this, { single })
  }

  onSelect(event) { console.log(event); }

  historial() { }

  //no funciona para todos los casos onResize(event) { this.vista = [event.target.innerWidth - 150, 280 ]; }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

  ngOnInit() { }

}
