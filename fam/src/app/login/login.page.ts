import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../providers/authservice.service';
import {EnergiaPage} from "../energia/energia.page";
import {NgForm} from "@angular/forms";
import { AlertController } from '@ionic/angular';
//import {ResetPasswordPage}from '../reset-password/reset-password'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,private authService: AuthserviceService) {}



  onSubmit(form: NgForm){
    const usrName =form.value.username;
    const password=form.value.password;
    // funcion de auth service retorna un obesrvable que toma valores booleanos basado en el resultado de la autenticacion
    const isAuthenticated=this.authService.logIn(usrName,password);
    isAuthenticated.subscribe((value)=>{
      console.log(value);
      if (value==true){
        this.router.navigate(['/energia']);
      }
      // en caso de que la validacion falla se activa una alerta de del celular mostrando el error
      
    }); 
  }
  ngOnInit() {
  }

}
