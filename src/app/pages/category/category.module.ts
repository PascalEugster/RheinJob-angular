import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { JobListItemComponent } from 'src/app/components/job-list-item/job-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule
  ],
  entryComponents: [JobListItemComponent],
  declarations: [CategoryPage, JobListItemComponent]
})
export class CategoryPageModule {}
