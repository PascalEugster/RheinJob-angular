import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { AccountFormComponent } from 'src/app/components/account-form/account-form.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule
  ],
  entryComponents: [AccountFormComponent],
  declarations: [AccountPage, AccountFormComponent]
})
export class AccountPageModule {}
