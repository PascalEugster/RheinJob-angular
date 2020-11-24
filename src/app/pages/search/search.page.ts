import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public jobs;
  public categories;

  constructor(public API: APIService) { }


  ngOnInit() {
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
}
