import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, ModelJobFilterInput } from 'src/app/API.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public id;
  public category;
  public jobs;
  constructor(private API:APIService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.API.GetCategory(this.id).then(category => {
      if(category != null) {
      this.category = category;
      console.log(this.category);
      }
    })

    let filterInput:ModelJobFilterInput = {
      categoryID: {
        eq: this.id
      }
    } 
    this.API.ListJobs(filterInput).then(jobs => {
      console.log(jobs);
      this.jobs = jobs.items;
    });
  }

}
