import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public companys;
  constructor(public API: APIService) { }

  ngOnInit() {
    this.API.ListCompanys().then(companys => {
      this.companys = companys.items;
    });
  } 

}
