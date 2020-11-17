import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { APIService, CreateJobInput } from 'src/app/API.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  form: FormGroup;
  public categories;

  constructor(private formBuilder: FormBuilder, private API: APIService, public datepipe: DatePipe) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      employment: ['', [Validators.required, Validators.minLength(1)]],
      benefits: [''],
      payFrom: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      payTo: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      category: [''],
    });

    this.API.ListCategorys().then(categoriesList => {
      if (categoriesList != null) {
        this.categories = categoriesList.items;
      }
    });

  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      const form = this.form.value;
      Auth.currentUserInfo().then(user => {
         const createJobInput: CreateJobInput = {
           title : form.title,
           description : form.description,
           jobCompanyId : user.username,
           jobCategoryId : form.category,
           createDate : new Date().toISOString(),
           expireDate : new Date().toISOString(),
           employment : form.employment
         };
         this.API.CreateJob(createJobInput).then(createdJob => {
          console.log('Job Created!');
         });
      });
    }
  }

}
