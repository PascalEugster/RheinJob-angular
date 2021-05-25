import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { AccountFormComponent } from 'src/app/components/account-form/account-form.component';
/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    AmplifyUIAngularModule /* Add Amplify module */
  ],
  entryComponents: [AccountFormComponent],
  declarations: [AccountPage, AccountFormComponent]
})
export class AccountPageModule {}
