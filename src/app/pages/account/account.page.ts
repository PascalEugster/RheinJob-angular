import { Component, OnInit } from '@angular/core';
import { APIService, GetAccountQuery } from 'src/app/API.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  account:Account;

  constructor(private api: APIService) {
  }

  ngOnInit() {

  }

}
