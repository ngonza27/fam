import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthserviceService} from "../providers/authservice.service";
import {Router} from "@angular/router" 
import {DataProvider} from "../providers/data/data";

@Component({
  selector: 'app-configuracion-usuario',
  templateUrl: './configuracion-usuario.page.html',
  styleUrls: ['./configuracion-usuario.page.scss'],
})
export class ConfiguracionUsuarioPage implements OnInit {

  constructor(private httpClient:HttpClient,  private dataProvider: DataProvider, private authService: AuthserviceService, private router:Router) {}
  
  
  logOut(){
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

  ngOnInit() {}
}
