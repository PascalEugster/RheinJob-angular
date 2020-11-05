import { Component, OnInit } from '@angular/core';
import { APIService, GetAccountQuery } from 'src/app/API.service';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  account: Account;
  formFields: FormFieldTypes;
  

  constructor(private api: APIService) {

    }

  ngOnInit() {

  }

}
