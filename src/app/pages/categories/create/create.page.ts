import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, CreateCategoryInput } from 'src/app/API.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  form: FormGroup;
  public categories;

  constructor(public formBuilder:FormBuilder, public API: APIService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      category: ['']
    });

    this.API.ListCategorys().then(categoriesList => {
      if (categoriesList != null) {
        this.categories = categoriesList.items;
      }
    });

  }
 
  onSubmit() {
    console.log('Company submit');
    if (!this.form.valid) {
      console.log('Alle felder müssen ausgefüllt werden!');
      return false;
    } else {
      const form = this.form.value;
      const createCategoryInput: CreateCategoryInput = {
        description : form.description,
        title : form.title,
        categoryCategoryId:  form.category,
      };
      this.API.CreateCategory(createCategoryInput).then(category => {

      });
    }
  }

}
