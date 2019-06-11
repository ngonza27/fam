import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Agua',
      url: '/agua',
    },
    {
      title: 'Energia',
      url: '/energia',
    },
    {
      title: 'Seguridad',
      url: '/seguridad',
    },
    {
      title: 'Luces',
      url: '/luces',
    },
    {
      title: 'Historial',
      url: '/historial',
    },
    {
      title: 'Otros',
      url: '/otros',
    },
    {
      title: 'Configuracion Dispositivo',
      url: '/configuracion-disp',
    },
    {
      title: 'Configuracion Agua y Energia',
      url: '/configuracion-agua-energia',
    },
    {
      title: 'Configuracion Wifi',
      url: '/configuracion-wifi',
    },
    {
      title: 'Configuracion Usuario',
      url: '/configuracion-usuario',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
