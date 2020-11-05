import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprenticeshipsPageRoutingModule } from './apprenticeships-routing.module';

import { ApprenticeshipsPage } from './apprenticeships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprenticeshipsPageRoutingModule
  ],
  declarations: [ApprenticeshipsPage]
})
export class ApprenticeshipsPageModule {}
