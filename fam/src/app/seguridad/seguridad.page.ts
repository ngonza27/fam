import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../providers/authservice.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage implements OnInit {

  constructor(private authService: AuthserviceService,private httpClient:HttpClient) {
  }

  activarSeguridad(){
    this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata','{"luz":{"accion":"1"}}').subscribe(
      data=>{console.log(data);},
      error => console.log(error)
    );
  }

  desactivarSeguridad(){
    this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata','{"luz":{"accion":"0"}}').subscribe(
      data=>{console.log(data);},
      error => console.log(error)
    );
  }

  ngOnInit() {
  }
}
