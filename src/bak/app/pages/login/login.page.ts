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

  authState: any;
  constructor(

  ) { 
  }

  ngOnInit() {
  }

}
