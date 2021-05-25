import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/API.service';
import { Employment } from 'src/app/enums/employment.enum';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {
  public job;
  public selectedEmployment;
  public employmentEnum;
  id = null;


  constructor(private activatedRoute: ActivatedRoute, private API: APIService) { }

 ngOnInit() {
  this.employmentEnum = Employment;
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.API.GetJob(this.id).then(getJob => {
  if(getJob != null) {
    this.job = getJob;
    this.selectedEmployment = this.employmentEnum[getJob.employment]
  }
  });
 }

}
