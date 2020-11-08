import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { APIService, GetAccountQuery } from 'src/app/API.service';
import { FormFieldTypes } from '@aws-amplify/ui-components';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formFields: FormFieldTypes;
  authState: any;
  constructor(

  ) { 
    this.formFields = [
      {
        type: "email",
        label: "Custom email Label",
        placeholder: "custom email placeholder",
        required: true,
      },
      {
        type: "password",
        label: "Custom Password Label",
        placeholder: "custom password placeholder",
        required: true,
      },
      {
        type: "phone_number",
        label: "Custom Phone Label",
        placeholder: "custom Phone placeholder",
        required: false,
      },
    ];
  }

  ngOnInit() {
  }

}
