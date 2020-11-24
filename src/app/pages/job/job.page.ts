import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {

  id = null;
  constructor(private activatedRoute: ActivatedRoute) { }

 ngOnInit() {
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
   console.log(this.id);
 }

}
