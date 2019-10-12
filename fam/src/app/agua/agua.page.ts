import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from "../providers/authservice.service";
import {Router} from "@angular/router" 

@Component({
  selector: 'app-agua',
  templateUrl: './agua.page.html',
  styleUrls: ['./agua.page.scss'],
})
export class AguaPage implements OnInit {

  constructor(private authService: AuthserviceService,private router:Router) { }

  gaugeType = "semi";
  gaugeValue = 5;
  gaugeLabel1 = "Consumo Agua Actual";
  gaugeAppendText = "L/hr";
  thickValue=15;
  gaugeSize=350;
  
  agua: string;

  ngOnInit() { }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  back() {
    this.router.navigate(['/menu']);
  }

}
