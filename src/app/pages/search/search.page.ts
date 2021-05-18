import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, ModelJobFilterInput, SearchableJobFilterInput, SearchJobsQuery } from 'src/app/API.service';
import { Employment } from 'src/app/enums/employment.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  form: FormGroup;
  public jobs = [];
  public categories;
  public selectedEmployment;
  public employmentEnum;

  constructor(public API: APIService,
             private formBuilder: FormBuilder,
             private changeDetection: ChangeDetectorRef ) { }


  ngOnInit() {

    this.form = this.formBuilder.group({
      title: [],
      location: [],
      employment: [ ],
      category: [ ],
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
        //this.jobs = listJobs.items;
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

      // let searchFilter:SearchableJobFilterInput = {
  
      //   categoryID: {
      //     matchPhrasePrefix: form.category
      //   },
      //   and : [
      //     {title: {matchPhrasePrefix: form.title}}
      //   ]

      // };

      let searchFilter:SearchableJobFilterInput = {
        or: [
          {
            categoryID: {
              matchPhrasePrefix: form.category
            },
            title : {
              matchPhrasePrefix: form.title
            }
          }
        ],

        
      };


      this.API.SearchJobs(searchFilter).then((searchedJobs: SearchJobsQuery) => {
        if(searchedJobs != null)
        {
          this.jobs = searchedJobs.items;
          this.changeDetection.detectChanges();
          console.log(this.jobs);
        }
        else {
          console.log('No Data for Filtered Jobs!')
        }
      })
    }
  }
}
