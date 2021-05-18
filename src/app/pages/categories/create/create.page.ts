import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { APIService, CreateCategoryInput } from 'src/app/API.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  form: FormGroup;
  public categories;

  constructor(public formBuilder:FormBuilder, public API: APIService, public toastService: ToastService) { }

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
    if (!this.form.valid) {
      console.log('Alle felder müssen ausgefüllt werden!');
      return false;
    } else {
      const form = this.form.value;
      const createCategoryInput: CreateCategoryInput = {
        description : form.description,
        title : form.title,
      };
      if(form.category != '0' || form.category != ''){
        createCategoryInput.categoryCategoryId = form.category;
      }

      this.API.CreateCategory(createCategoryInput).then(category => {
        this.toastService.show();
        console.log('Neue Kategorie erstellt : ' + category.title);
      });
    }
  }

}
