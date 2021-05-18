import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { JobListItemComponent } from 'src/app/components/job-list-item/job-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  entryComponents: [JobListItemComponent],
  declarations: [SearchPage, JobListItemComponent]
})
export class SearchPageModule {}
