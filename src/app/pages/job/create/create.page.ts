import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { APIService, CreateJobInput } from 'src/app/API.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  form: FormGroup;
  public categories;

  public title;
  public shortDescription;
  public description;
  public employment;
  public benefits;
  public payFrom;
  public payTo;
  public category;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['fontName'],
      ['fontSize', 'insertImage',
      'insertVideo',]
    ]
  };

  constructor(private formBuilder: FormBuilder, private API: APIService, public datepipe: DatePipe) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      shortDescription: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      employment: ['', [Validators.required, Validators.minLength(1)]],
      benefits: [''],
      payFrom: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      payTo: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      category: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.API.ListCategorys().then(categoriesList => {
      if (categoriesList != null) {
        this.categories = categoriesList.items;
      }
    });

  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      const form = this.form.value;
      Auth.currentUserInfo().then(user => {
        this.API.GetAccount(user.username).then(getAccount => {
          if (getAccount != null) {
            if (getAccount.company != null) {
              const createJobInput: CreateJobInput = {
                title: form.title,
                shortDescription: form.shortDescription,
                description: form.description,
                jobCompanyId: getAccount.company.id,
                jobCategoryId: form.category,
                createDate: new Date().toISOString(),
                expireDate: new Date().toISOString(),
                employment: form.employment
              };
              this.API.CreateJob(createJobInput).then(createdJob => {
                console.log('Job Created!');
              });
            }
          }
        });
      });
    }
  }
}