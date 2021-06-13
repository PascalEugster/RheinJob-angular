import { Component, OnInit } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formFields: FormFieldTypes;

  

  constructor() {

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
  
  ngOnInit() {
  }

  
}
