import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { APIService } from './API.service';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { API, Auth } from 'aws-amplify';



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

  formFields: FormFieldTypes;
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(
    //private apiService: APIService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ref: ChangeDetectorRef,
    private api: APIService,
  ) {
    this.initializeApp();

    this.formFields = [
      {
        type: "email",
        label: "E-Mail",
        placeholder: "E-Mail Adresse eingeben",
        required: true,
      },
      {
        type: "password",
        label: "Passwort",
        placeholder: "Passwort hier eingeben",
        required: true,
      },
      {
        type: "password",
        label: "Passwort",
        placeholder: "Passwort hier eingeben",
        required: true,
      },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();

      if(authState == 'signedin' && this.api.GetUser(this.user.username) == null)
      {
        this.api.CreateAccount().then(event => {
          console.log('User Created')
        })
      }
    })
  }

  
  handleSignUpSubmit(event: any) {
    //this.signUp(event);
    console.log('HANDLE SUBMIT for Sign up!', event);
  }

  handleSignInSubmit(event: any) {
    console.log('HANDLE SUBMIT for Sign In!', event);
  }

  

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
