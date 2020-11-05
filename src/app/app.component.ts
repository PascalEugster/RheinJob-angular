import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { APIService } from './API.service';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  amplifyService: AmplifyService;
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
      title: 'Login',
      url: '/login',
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

  public signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '41',
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      },
      {
        label: 'Unternehmens Account',
        key: 'isCompany',
        required: true,
        displayOrder: 4,
        type: 'boolean',
        custom: true
      }
    ]
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public amplify: AmplifyService,
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
