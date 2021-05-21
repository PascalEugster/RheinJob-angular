import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categorys;
  form: FormGroup;

  constructor(public API:APIService) { }

  ngOnInit() {
    this.API.listCategorysWithChildren().then(categorys=> {
    this.categorys = categorys.items;
    console.log(this.categorys);
    });
  }

}
