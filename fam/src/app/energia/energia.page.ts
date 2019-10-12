import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from "../providers/authservice.service";
import {Router} from "@angular/router" 

@Component({
  selector: 'app-energia',
  templateUrl: './energia.page.html',
  styleUrls: ['./energia.page.scss'],
})
export class EnergiaPage implements OnInit {

  constructor(private authService: AuthserviceService,private router:Router) { }

  gaugeType = "semi";
  gaugeValue = 28.9;
  gaugeLabel1 = "Consumo Energia Actual";
  gaugeAppendText = "kW/hr";
  thickValue=15;
  gaugeSize=350;
  
  energia: string;

  ngOnInit() { }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

  back() {
    this.router.navigate(['/menu']);
  }

}
