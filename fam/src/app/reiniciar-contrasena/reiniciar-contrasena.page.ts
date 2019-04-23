import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthserviceService} from "../providers/authservice.service";

@Component({
  selector: 'app-reiniciar-contrasena',
  templateUrl: './reiniciar-contrasena.page.html',
  styleUrls: ['./reiniciar-contrasena.page.scss'],
})
export class ReiniciarContrasenaPage implements OnInit {

  public buttonClicked: boolean = false;

  constructor(public authService:AuthserviceService) {}

  onSubmit(form:NgForm){
    const usrName =form.value.username;
    const code=form.value.password;
    this.authService.forgotPassword(usrName);
    this.buttonClicked=true;
  }

  ngOnInit() {
  }

}
