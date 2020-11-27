import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { CreatePage } from './create.page';
import { TagInputModule } from 'ngx-chips';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
    TagInputModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  declarations: [CreatePage]
})
export class CreatePageModule {}
