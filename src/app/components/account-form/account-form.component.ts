import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {
  data: any = { myToggle: false };
  validations_form: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSumbit() {

  }

}
