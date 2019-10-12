import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataProvider} from "../providers/data/data";
import {AuthserviceService} from "../providers/authservice.service";
import {Router} from "@angular/router" 

@Component({
  selector: 'app-configuracion-disp',
  templateUrl: './configuracion-disp.page.html',
  styleUrls: ['./configuracion-disp.page.scss'],
})
export class ConfiguracionDispPage implements OnInit {

  userInfo: any;
  idDispositivo="";
  nombreDispositivo="";
  idBorrar="";
  tipo=1;

  constructor(private router:Router, private httpClient: HttpClient, private dataService: DataProvider, private authService: AuthserviceService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguraciondispPage');
  }

  eliminarDispositivo(){
    let saveDevice = {"userId":this.authService.getAuthenticatedUser()['username'],
                      "dDevice":this.idBorrar};
                  
      this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo',saveDevice).subscribe(
        data=>{console.log(data);},
        error => console.log(error)
      );
  }

  registrarDisp(){
    const nombreDis=this.nombreDispositivo;
    const id=this.idDispositivo;
    // 0= agua ,1=energia, 2=dispositivos de seguridad, 3= luces, 4= otros sensores
    if (this.tipo==0){
      console.log("agregandoDispositivo")
      let saveDevice = {"userId":this.authService.getAuthenticatedUser()['username'],
                  "rDevice":{
                    idDispositivo:id,
                    nombreDispositivo:"waterSensor",
                    "Tipo":this.tipo
                  }};
    console.log(saveDevice);
      this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo',saveDevice).subscribe(
        data=>{console.log(data);},
        error => console.log(error)
      );

    }

    if (this.tipo==1){
      let saveDevice = {"userId":this.authService.getAuthenticatedUser()['username'],
                  "rDevice":{
                    idDispositivo:id,
                    nombreDispositivo:"energySensor",
                    "Tipo":this.tipo
                  }};
    console.log(saveDevice);
      this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo',saveDevice).subscribe(
        data=>{console.log(data);},
        error => console.log(error)
      );

    }

    if (this.tipo==2 ||this.tipo==3 || this.tipo==4){
      let saveDevice = {"userId":this.authService.getAuthenticatedUser()['username'],
                  "rDevice":{
                    idDispositivo:id,
                    nombreDispositivo:this.nombreDispositivo,
                    "Tipo":this.tipo
                  }};
    console.log(saveDevice);
      this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo',saveDevice).subscribe(
        data=>{console.log(data);},
        error => console.log(error)
      );

    }
    
  }

  logOut(){
    //this.authService.logOut();
    this.router.navigate(['/home']);

  }

  ngOnInit() { }

  back() {
    this.router.navigate(['/menu']);
  }
}
