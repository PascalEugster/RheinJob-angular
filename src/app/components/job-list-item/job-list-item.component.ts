import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.scss'],
})
export class JobListItemComponent implements OnInit {

  @Input() job: any;

  constructor() { }

  ngOnInit() {}

}
