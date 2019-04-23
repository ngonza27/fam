import { Component, OnInit } from '@angular/core';
import { DataProvider } from "../providers/data/data";
import {AuthserviceService} from "../providers/authservice.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-otros',
  templateUrl: './otros.page.html',
  styleUrls: ['./otros.page.scss'],
})
export class OtrosPage implements OnInit {

  devices:any;

  constructor(private dataService:DataProvider,private authService: AuthserviceService,private router:Router) {
    this.dataService.returnUserInfo();
    this.devices=Object.keys(this.dataService.userInfo['otros']);   
    console.log(this.devices);
  }

  ionViewDidLoad() {
    this.dataService.returnUserInfo();
    this.devices=Object.keys(this.dataService.userInfo['otros']);
    console.log(this.devices);
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

  ngOnInit() { }

}
