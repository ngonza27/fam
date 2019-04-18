import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.page.html',
  styleUrls: ['./energia.page.scss'],
})
export class EnergiaPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  gaugeType = "semi";
  gaugeValue = 28.9;
  gaugeLabel1 = "Consumo Energia Actual";
  gaugeAppendText = "km/hr";
  thickValue=15;
  gaugeSize=350;
  
  energia: string;

  ngOnInit() {
  }

}
