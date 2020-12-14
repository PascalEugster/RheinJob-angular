import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, ModelJobFilterInput } from 'src/app/API.service';
import { Employment } from 'src/app/enums/employment.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  form: FormGroup;
  public jobs;
  public categories;
  public selectedEmployment;
  public employmentEnum;

  constructor(public API: APIService, private formBuilder: FormBuilder,) { }


  ngOnInit() {

    this.form = this.formBuilder.group({
      title: [],
      location: [''],
      employment: ['' ],
      category: ['' ],
    });


    this.employmentEnum = Employment;
    this.reload();

    this.API.ListCategorys().then(categoriesList => {
      if (categoriesList != null) {
        this.categories = categoriesList.items;
      }
    });
  }

  reload() {
    this.API.ListJobs().then(listJobs => {
      if(listJobs != null)
      {
        this.jobs = listJobs.items;
        console.log(this.jobs);
      }
    });
  }

  async onSubmit() {
    if (!this.form.valid) {
      console.log('Form not Valid!');
      return false;
    } else {
      const form = this.form.value;
      let filter:ModelJobFilterInput = {
        title : form.title, 
        employment: form.employment,
        category: form.category
      };
      var response =  await this.API.ListJobs(filter);
      this.jobs = (response as any).data.listJobs.items;
    }
  }
}
