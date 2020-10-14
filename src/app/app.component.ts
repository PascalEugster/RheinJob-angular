import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Suche',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Lehrstellen',
      url: '/apprenticeships',
      icon: 'golf'
    },
    {
      title: 'Unternehmen',
      url: '/companies',
      icon: 'business'
    },
    {
      title: 'Account',
      url: '/account',
      icon: 'person'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'close-circle'
    },
    {
      title: 'Job',
      url: '/job',
      icon: 'close-circle'
    },
    {
      title: 'Job erfassen',
      url: '/job/create',
      icon: 'create'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private apiService: APIService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }
}
