import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {
  public job;
  id = null;
  constructor(private activatedRoute: ActivatedRoute, private API: APIService) { }

 ngOnInit() {
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
   this.API.GetJob(this.id).then(getJob => {
    if(getJob != null) {
      this.job = getJob;
    }
   });
 }

}
