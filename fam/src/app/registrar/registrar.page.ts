import { Component, OnInit } from '@angular/core';
import {AlertController} from "ionic-angular";
import {NgForm} from "@angular/forms";
import {AuthserviceService} from "../providers/authservice.service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private authService: AuthserviceService,private alertCtrl:AlertController) {
  }

  onSubmit(form: NgForm){
    const usrName =form.value.username;
    const email =form.value.email;
    const password=form.value.password;
    const phoneNumber=form.value.phoneNumber;
    //llama al metodo correspondiente en el servicio authservice con 4 parametros tomados de la forma html
    let registered=this.authService.register(usrName,email,password,phoneNumber);
    registered.subscribe((value)=>{
      if (value==true){
        let alert = this.alertCtrl.create({
          title: 'Exito!!',
          subTitle: "Usario: "+usrName+" con la contrasena: "+password+" creado con exito!",
          buttons: ['Ok']
        });
        alert.present();

      }

      else{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: "Pruebe que su contrasena tengo almenos 6 caracteres una mayuscula un numero y un simbolo, o que su telefono tengo el simbolo +",
          buttons: ['Ok']
        });
        alert.present();

      }

    })
  };

  ngOnInit() {
  }

}
