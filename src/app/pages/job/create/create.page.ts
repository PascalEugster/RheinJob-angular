import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

   form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      code: [],
      tags: [[]],
    });
  }
  
  ngOnInit() {
  }
  upload(form) {
    console.log(form.tags);
    form.tags = this.tagArrayToString(form.tags);
    console.log(form.tags);
  }

  tagArrayToString(tagArray: string[]): string {
    if (Array.isArray(tagArray) && tagArray.length > 0) {
      const tags = tagArray.map((e: any) => `[${e.value}]`);
      const tagString = tags.join();
      return tagString;
    } else {
      return '';
    }
  }

}
