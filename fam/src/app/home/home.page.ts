import { Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import {LoginPage} from "../login/login.page";

import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}
