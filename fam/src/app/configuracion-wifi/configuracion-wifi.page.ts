import { Component, OnInit } from '@angular/core';

declare var espSmartconfig: any;

@Component({
  selector: 'app-configuracion-wifi',
  templateUrl: './configuracion-wifi.page.html',
  styleUrls: ['./configuracion-wifi.page.scss'],
})
export class ConfiguracionWifiPage implements OnInit {

  network = {
    ssid: null,
    bssid: null,
    password: null,
  };

  statusMessage = "Awaiting action.";

  constructor() { }

  doConfig() {
    // console.log(window);
    console.log("ESP:" + "Configuring...");
    this.statusMessage = "Configuring...";
    const apSsid = this.network.ssid; //,ssid of the wifi,for example: "wifiName"
    const apBssid = this.network.bssid; //,bssid of the wifi,for example "b2:05:2f:92"
    const apPassword = this.network.password; //,password of the wifi,for example: "wifiPassword"
    const isSsidHiddenStr = "NO"; //,default "NO"
    const taskResultCountStr = 1;//,the count of device you want to config,for example:1

    // this.statusMessage =
    espSmartconfig.startConfig(apSsid, apBssid, apPassword, isSsidHiddenStr, taskResultCountStr, res => {
      console.log("ESP:" + "Connected to ESP" + res);
      alert(res);
      // return "Connected to ESP";
    }, error => {
      console.log("ESP-error:" + error);
      // return "Failed connecting to ESP.../n" + error;
    }).then(
      this.stopConfig()
    );
  }

  stopConfig() {
    console.log("ESP:" + "Stopping...");
    // this.statusMessage =
    espSmartconfig.stopConfig(res => {
      console.log("ESP:" + res);
      // return res;
    }, error => {
      console.log("ESP:" + error);
      // return error;
    });
  }

  ngOnInit() {
  }

}
