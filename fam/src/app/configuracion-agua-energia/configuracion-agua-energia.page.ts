import { Component, OnInit } from '@angular/core';
import {DataProvider} from "../providers/data/data";
import { HttpClient } from '@angular/common/http';
import {AuthserviceService} from "../providers/authservice.service";
import {Router} from "@angular/router" 

@Component({
  selector: 'app-configuracion-agua-energia',
  templateUrl: './configuracion-agua-energia.page.html',
  styleUrls: ['./configuracion-agua-energia.page.scss'],
})
export class ConfiguracionAguaEnergiaPage implements OnInit {

  valEnergia="";
  valAgua="";

  constructor(private httpClient:HttpClient,  private dataProvider: DataProvider, private authService: AuthserviceService, private router:Router) {
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

  guardarEnergia(){
    let guardarEnergia = {"userId":this.authService.getAuthenticatedUser()['username'],
                          "sgEnergy":this.valEnergia};
    this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo',guardarEnergia).subscribe(
      data=>{console.log(data);},
      error => console.log(error)
    );
  }

  guardarAgua(){
    let guardarAgua = {"userId":this.authService.getAuthenticatedUser()['username'],
                      "sgWater":this.valAgua};
    this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo',guardarAgua).subscribe(
      data=>{console.log(data);},
      error => console.log(error)
    );
  }

  ngOnInit() { }
}
