import { Component, OnInit } from '@angular/core';
import {MenuController } from '@ionic/angular';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.page.html',
  styleUrls: ['./agua.page.scss'],
})
export class AguaPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  gaugeType = "semi";
  gaugeValue = 5;
  gaugeLabel1 = "Consumo Agua Actual";
  gaugeAppendText = "L/hr";
  thickValue=15;
  gaugeSize=350;
  
  agua: string;

  ngOnInit() {
  }

}
