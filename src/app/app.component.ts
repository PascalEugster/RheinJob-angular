import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { APIService } from './API.service';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { API, Auth } from 'aws-amplify';
import { Router } from '@angular/router'; 



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
      title: 'Kategorien',
      url: '/categories',
      icon: 'business'
    },
    {
      title: 'Account',
      url: '/account',
      icon: 'person'
    },
    {
      title: 'Job erfassen',
      url: '/job/create',
      icon: 'create'
    },
    {
      title: 'Kategorie erfassen',
      url: '/categories/create',
      icon: 'create'
    }
  ];

  formFields: FormFieldTypes;
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ref: ChangeDetectorRef,
    private api: APIService,
    private router: Router
  ) {
    this.initializeApp();

    this.formFields = [
      {
        type: 'email',
        label: 'E-Mail',
        placeholder: 'E-Mail Adresse eingeben',
        required: true,
      },
      {
        type: 'password',
        label: 'Passwort',
        placeholder: 'Passwort hier eingeben',
        required: true,
      },
      {
        type: 'password',
        label: 'Passwort',
        placeholder: 'Passwort hier eingeben',
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
    // onAuthUIStateChange((authState, authData) => {
    //   this.authState = authState;
    //   this.user = authData as CognitoUserInterface;
    //   this.ref.detectChanges();
 
    //   if(authState == 'signedin' ) 
    //   {
    //     Auth.currentUserInfo().then(user => { 
    //       this.api.GetUser(user.username).then(user => {
    //         if(user == null) {
    //           this.router.navigate(['/account']);
    //         }
    //         else {
    //           this.router.navigate(['/']); 
    //         }
    //       });
    //     });
    //   }
    // });
  }

  
  handleSignUpSubmit(event: any) {
    //this.signUp(event);
    console.log('HANDLE SUBMIT for Sign up!', event);
  }

  handleSignInSubmit(event: any) {
    console.log('HANDLE SUBMIT for Sign In!', event);
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
