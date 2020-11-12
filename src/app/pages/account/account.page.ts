import { Component, OnInit } from '@angular/core';
import { APIService, CreateAccountInput, CreateCompanyInput, CreateUserInput, DeleteCompanyInput, DeleteUserInput, GetAccountQuery, UpdateAccountInput, UpdateCompanyInput, UpdateUserInput } from 'src/app/API.service';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, Amplify } from 'aws-amplify';
import { appInitialize } from '@ionic/angular/app-initialize';
import { CommaExpr } from '@angular/compiler';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  account: Account;
  formFields: FormFieldTypes;
  data: any = { myToggle: false };
  companyForm: FormGroup;
  userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public API: APIService) { }

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      website: ['', [Validators.required, Validators.minLength(1)]],
      legal: [''],
      count: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      street: ['', [Validators.required, Validators.minLength(3)]],
      houseNumber: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      information: ['', [Validators.required, Validators.minLength(2)]],
      canton: ['', [Validators.required, Validators.minLength(3)]],
      postcode: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    });

    this.userForm = this.formBuilder.group({
      prename: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      street: ['', [Validators.required, Validators.minLength(3)]],
      houseNumber: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      information: [''],
      city: ['', [Validators.required, Validators.minLength(2)]],
      canton: ['', [Validators.required, Validators.minLength(3)]],
      postcode: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    });
    Auth.currentUserInfo().then(user => {
      this.API.GetAccount(user.id).then(getAccount => {
        if (getAccount.type === 'company') {
          this.data.myToggle = true;
        }
        else {
          this.data.myToggle = false;
        }
      });
      this.API.GetAccount(user.id).then(account => {
        if (account.user != null) {
          this.userForm.setValue({
            prename: account.user.prename,
            lastname: account.user.lastname,
            street: account.user.street,
            houseNumber: account.user.houseNumber,
            information: account.user.information,
            city: account.user.city,
            canton: account.user.canton,
            postcode: account.user.postcode,
          });
        }

      });

      this.API.GetAccount(user.id).then(account => {
        if (account.company != null) {
          this.companyForm.setValue({
            name: account.company.name,
            description: account.company.description,
            website: account.company.website,
            count: account.company.count,
            legal: account.company.legal,
            street: account.company.street,
            houseNumber: account.company.houseNumber,
            information: account.company.information,
            city: account.company.city,
            canton: account.company.canton,
            postcode: account.company.postcode,
          });
        }
      });
    });
  }

  isClicked(value: boolean) {
    this.data.myToggle = value;
  }

  onSubmitCompany() {
    console.log('Company submit');
    if (!this.companyForm.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      const companyForm = this.companyForm.value;
      let type = 'company';
      Auth.currentUserInfo().then(user => {
        const createCompanyInput: CreateCompanyInput = {
          id: user.id,
          city: companyForm.city,
          houseNumber: companyForm.houseNumber,
          postcode: companyForm.postcode,
          name: companyForm.name,
          canton: companyForm.canton,
          street: companyForm.street,
          website: companyForm.website,
          description: companyForm.description,
          legal: companyForm.legal,
          count: companyForm.count,
          information: companyForm.information,
          companyAccountId: user.id,
        };

        let updateCompanyInput: UpdateCompanyInput = {
          id: user.id,
          city: companyForm.city,
          houseNumber: companyForm.houseNumber,
          postcode: companyForm.postcode,
          name: companyForm.name,
          canton: companyForm.canton,
          street: companyForm.street,
          website: companyForm.website,
          description: companyForm.description,
          count: companyForm.count,
          information: companyForm.information,
          legal: companyForm.legal,
        };

        this.API.GetAccount(user.id).then(account => {
          if (account != null) {
            //Update
            let UpdateAccountInput: UpdateAccountInput = {
              id: account.id,
              accountCompanyId: user.id,
              type
            };
            this.API.UpdateAccount(UpdateAccountInput).then(updatedAccount => {
              this.deleteUser(user.id, UpdateAccountInput);
              this.API.GetCompany(user.id).then(getCompany => {
                if (getCompany != null) {
                  this.API.UpdateCompany(updateCompanyInput).then(updatedCompany => {
                    console.log("Company Updated!");
                  });
                } else {
                  this.API.CreateCompany(createCompanyInput).then(createdCompany => {
                    console.log("Company Created!");
                  });
                }
              });
            });
          } else {
            //Create
            const createAccountInput: CreateAccountInput = {
              id: user.id,
              type: type,
              accountCompanyId: user.id,
            };

            this.API.CreateAccount(createAccountInput).then(createdAccount => {
              this.API.CreateCompany(createCompanyInput).then(createdCompany => {
                console.log(createdCompany);
              });
            });
          }
        });
      });
    }
  }

  onSubmitUser() {
    console.log('User submit');
    if (!this.userForm.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      const userForm = this.userForm.value;
      let type = 'user';
      Auth.currentUserInfo().then(user => {
        let updateUserInput: UpdateUserInput = {
          id: user.id,
          city: userForm.city,
          houseNumber: userForm.houseNumber,
          information: userForm.information,
          lastname: userForm.lastname,
          postcode: userForm.postcode,
          prename: userForm.prename,
          canton: userForm.canton,
          street: userForm.street,
        };

        const createUserInput: CreateUserInput = {
          id: user.id,
          prename: userForm.prename,
          lastname: userForm.lastname,
          street: userForm.street,
          houseNumber: userForm.houseNumber,
          information: userForm.information,
          city: userForm.city,
          postcode: userForm.postcode,
          canton: userForm.canton,
          userAccountId: user.id,
        };

        const createAccountInput: CreateAccountInput = {
          id: user.id,
          type: type,
          accountUserId: user.id,
        };

        this.API.GetAccount(user.id).then(account => {
          if (account != null) {
            //Update
            let UpdateAccountInput: UpdateAccountInput = {
              id: account.id,
              type
            };
            this.API.UpdateAccount(UpdateAccountInput).then(updatedAccount => {
              this.deleteCompany(user.id, UpdateAccountInput);
              this.API.GetUser(user.id).then(getUser => {
                if (getUser != null) {
                  this.API.UpdateUser(updateUserInput).then(updatedUser => {
                    console.log("User Updated!");
                  });
                } else {
                  this.API.CreateUser(createUserInput).then(createdUser => {
                    console.log("User Created!");
                  });
                }
              });
            });
          } else {
            //Create
            this.API.CreateAccount(createAccountInput).then(createdAccount => {
              this.API.CreateUser(createUserInput).then(createdUser => {
                console.log("User Created!");
              });
            });
          }
        });
      });
    };
  }

  deleteCompany(user: string, updateAccountInput: UpdateAccountInput) {
    let deleteCompanyInput: DeleteCompanyInput = { id: user };
    updateAccountInput.accountCompanyId = null;
    this.companyForm.reset();
    this.API.DeleteCompany(deleteCompanyInput);
  }

  deleteUser(user: string, updateAccountInput: UpdateAccountInput) {
    let deleteUserInput: DeleteUserInput = { id: user };
    updateAccountInput.accountUserId = null;
    this.userForm.reset();
    this.API.DeleteUser(deleteUserInput);
  }

}
