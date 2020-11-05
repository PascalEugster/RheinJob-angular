/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTaskInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  status?: string | null;
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateTaskInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  status?: string | null;
};

export type DeleteTaskInput = {
  id?: string | null;
};

export type CreatePrivateNoteInput = {
  id?: string | null;
  content: string;
};

export type ModelPrivateNoteConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelPrivateNoteConditionInput | null> | null;
  or?: Array<ModelPrivateNoteConditionInput | null> | null;
  not?: ModelPrivateNoteConditionInput | null;
};

export type UpdatePrivateNoteInput = {
  id: string;
  content?: string | null;
};

export type DeletePrivateNoteInput = {
  id?: string | null;
};

export type CreateAccountInput = {
  id?: string | null;
  type: string;
  accountUserId?: string | null;
  accountCompanyId?: string | null;
};

export type ModelAccountConditionInput = {
  type?: ModelStringInput | null;
  and?: Array<ModelAccountConditionInput | null> | null;
  or?: Array<ModelAccountConditionInput | null> | null;
  not?: ModelAccountConditionInput | null;
};

export type UpdateAccountInput = {
  id: string;
  type?: string | null;
  accountUserId?: string | null;
  accountCompanyId?: string | null;
};

export type DeleteAccountInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  prename: string;
  lastname: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  userAccountId: string;
};

export type ModelUserConditionInput = {
  prename?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  street?: ModelStringInput | null;
  houseNumber?: ModelStringInput | null;
  postcode?: ModelIntInput | null;
  city?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateUserInput = {
  id: string;
  prename?: string | null;
  lastname?: string | null;
  street?: string | null;
  houseNumber?: string | null;
  postcode?: number | null;
  city?: string | null;
  image?: string | null;
  userAccountId?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateCompanyInput = {
  id?: string | null;
  name: string;
  description: string;
  website: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  companyAccountId: string;
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  website?: ModelStringInput | null;
  street?: ModelStringInput | null;
  houseNumber?: ModelStringInput | null;
  postcode?: ModelIntInput | null;
  city?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  website?: string | null;
  street?: string | null;
  houseNumber?: string | null;
  postcode?: number | null;
  city?: string | null;
  image?: string | null;
  companyAccountId?: string | null;
};

export type DeleteCompanyInput = {
  id?: string | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  title: string;
  description: string;
  categoryCategoryId?: string | null;
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  categoryCategoryId?: string | null;
};

export type DeleteCategoryInput = {
  id?: string | null;
};

export type CreateJobInput = {
  id?: string | null;
  title: string;
  description: string;
  createDate: string;
  expireDate: string;
  jobCompanyId: string;
  jobCategoryId: string;
};

export type ModelJobConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  createDate?: ModelStringInput | null;
  expireDate?: ModelStringInput | null;
  and?: Array<ModelJobConditionInput | null> | null;
  or?: Array<ModelJobConditionInput | null> | null;
  not?: ModelJobConditionInput | null;
};

export type UpdateJobInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  createDate?: string | null;
  expireDate?: string | null;
  jobCompanyId?: string | null;
  jobCategoryId?: string | null;
};

export type DeleteJobInput = {
  id?: string | null;
};

export type CreateApplicationInput = {
  id?: string | null;
  title: string;
  applicationJobId: string;
};

export type ModelApplicationConditionInput = {
  title?: ModelStringInput | null;
  and?: Array<ModelApplicationConditionInput | null> | null;
  or?: Array<ModelApplicationConditionInput | null> | null;
  not?: ModelApplicationConditionInput | null;
};

export type UpdateApplicationInput = {
  id: string;
  title?: string | null;
  applicationJobId?: string | null;
};

export type DeleteApplicationInput = {
  id?: string | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPrivateNoteFilterInput | null> | null;
  or?: Array<ModelPrivateNoteFilterInput | null> | null;
  not?: ModelPrivateNoteFilterInput | null;
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelAccountFilterInput | null> | null;
  or?: Array<ModelAccountFilterInput | null> | null;
  not?: ModelAccountFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  prename?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  street?: ModelStringInput | null;
  houseNumber?: ModelStringInput | null;
  postcode?: ModelIntInput | null;
  city?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  website?: ModelStringInput | null;
  street?: ModelStringInput | null;
  houseNumber?: ModelStringInput | null;
  postcode?: ModelIntInput | null;
  city?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  createDate?: ModelStringInput | null;
  expireDate?: ModelStringInput | null;
  and?: Array<ModelJobFilterInput | null> | null;
  or?: Array<ModelJobFilterInput | null> | null;
  not?: ModelJobFilterInput | null;
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  and?: Array<ModelApplicationFilterInput | null> | null;
  or?: Array<ModelApplicationFilterInput | null> | null;
  not?: ModelApplicationFilterInput | null;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdatePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeletePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateAccountMutation = {
  __typename: "Account";
  id: string;
  type: string;
  user: {
    __typename: "User";
    id: string;
    prename: string;
    lastname: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAccountMutation = {
  __typename: "Account";
  id: string;
  type: string;
  user: {
    __typename: "User";
    id: string;
    prename: string;
    lastname: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAccountMutation = {
  __typename: "Account";
  id: string;
  type: string;
  user: {
    __typename: "User";
    id: string;
    prename: string;
    lastname: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  prename: string;
  lastname: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  prename: string;
  lastname: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  prename: string;
  lastname: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  description: string;
  website: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  description: string;
  website: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  description: string;
  website: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  title: string;
  description: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categories: {
    __typename: "ModelCategoryConnection";
    items: Array<{
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  title: string;
  description: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categories: {
    __typename: "ModelCategoryConnection";
    items: Array<{
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  title: string;
  description: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categories: {
    __typename: "ModelCategoryConnection";
    items: Array<{
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateJobMutation = {
  __typename: "Job";
  id: string;
  title: string;
  description: string;
  createDate: string;
  expireDate: string;
  applications: {
    __typename: "ModelApplicationConnection";
    items: Array<{
      __typename: "Application";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateJobMutation = {
  __typename: "Job";
  id: string;
  title: string;
  description: string;
  createDate: string;
  expireDate: string;
  applications: {
    __typename: "ModelApplicationConnection";
    items: Array<{
      __typename: "Application";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteJobMutation = {
  __typename: "Job";
  id: string;
  title: string;
  description: string;
  createDate: string;
  expireDate: string;
  applications: {
    __typename: "ModelApplicationConnection";
    items: Array<{
      __typename: "Application";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateApplicationMutation = {
  __typename: "Application";
  id: string;
  title: string;
  job: {
    __typename: "Job";
    id: string;
    title: string;
    description: string;
    createDate: string;
    expireDate: string;
    applications: {
      __typename: "ModelApplicationConnection";
      nextToken: string | null;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateApplicationMutation = {
  __typename: "Application";
  id: string;
  title: string;
  job: {
    __typename: "Job";
    id: string;
    title: string;
    description: string;
    createDate: string;
    expireDate: string;
    applications: {
      __typename: "ModelApplicationConnection";
      nextToken: string | null;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteApplicationMutation = {
  __typename: "Application";
  id: string;
  title: string;
  job: {
    __typename: "Job";
    id: string;
    title: string;
    description: string;
    createDate: string;
    expireDate: string;
    applications: {
      __typename: "ModelApplicationConnection";
      nextToken: string | null;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items: Array<{
    __typename: "Task";
    id: string;
    title: string;
    description: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPrivateNoteQuery = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListPrivateNotesQuery = {
  __typename: "ModelPrivateNoteConnection";
  items: Array<{
    __typename: "PrivateNote";
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAccountQuery = {
  __typename: "Account";
  id: string;
  type: string;
  user: {
    __typename: "User";
    id: string;
    prename: string;
    lastname: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAccountsQuery = {
  __typename: "ModelAccountConnection";
  items: Array<{
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  prename: string;
  lastname: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    prename: string;
    lastname: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  name: string;
  description: string;
  website: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCompanysQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  title: string;
  description: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categories: {
    __typename: "ModelCategoryConnection";
    items: Array<{
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCategorysQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetJobQuery = {
  __typename: "Job";
  id: string;
  title: string;
  description: string;
  createDate: string;
  expireDate: string;
  applications: {
    __typename: "ModelApplicationConnection";
    items: Array<{
      __typename: "Application";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListJobsQuery = {
  __typename: "ModelJobConnection";
  items: Array<{
    __typename: "Job";
    id: string;
    title: string;
    description: string;
    createDate: string;
    expireDate: string;
    applications: {
      __typename: "ModelApplicationConnection";
      nextToken: string | null;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetApplicationQuery = {
  __typename: "Application";
  id: string;
  title: string;
  job: {
    __typename: "Job";
    id: string;
    title: string;
    description: string;
    createDate: string;
    expireDate: string;
    applications: {
      __typename: "ModelApplicationConnection";
      nextToken: string | null;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListApplicationsQuery = {
  __typename: "ModelApplicationConnection";
  items: Array<{
    __typename: "Application";
    id: string;
    title: string;
    job: {
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdatePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeletePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateAccountSubscription = {
  __typename: "Account";
  id: string;
  type: string;
  user: {
    __typename: "User";
    id: string;
    prename: string;
    lastname: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAccountSubscription = {
  __typename: "Account";
  id: string;
  type: string;
  user: {
    __typename: "User";
    id: string;
    prename: string;
    lastname: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAccountSubscription = {
  __typename: "Account";
  id: string;
  type: string;
  user: {
    __typename: "User";
    id: string;
    prename: string;
    lastname: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  prename: string;
  lastname: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  prename: string;
  lastname: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  prename: string;
  lastname: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  description: string;
  website: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  description: string;
  website: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  description: string;
  website: string;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  image: string;
  account: {
    __typename: "Account";
    id: string;
    type: string;
    user: {
      __typename: "User";
      id: string;
      prename: string;
      lastname: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  title: string;
  description: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categories: {
    __typename: "ModelCategoryConnection";
    items: Array<{
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  title: string;
  description: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categories: {
    __typename: "ModelCategoryConnection";
    items: Array<{
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  title: string;
  description: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categories: {
    __typename: "ModelCategoryConnection";
    items: Array<{
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateJobSubscription = {
  __typename: "Job";
  id: string;
  title: string;
  description: string;
  createDate: string;
  expireDate: string;
  applications: {
    __typename: "ModelApplicationConnection";
    items: Array<{
      __typename: "Application";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateJobSubscription = {
  __typename: "Job";
  id: string;
  title: string;
  description: string;
  createDate: string;
  expireDate: string;
  applications: {
    __typename: "ModelApplicationConnection";
    items: Array<{
      __typename: "Application";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteJobSubscription = {
  __typename: "Job";
  id: string;
  title: string;
  description: string;
  createDate: string;
  expireDate: string;
  applications: {
    __typename: "ModelApplicationConnection";
    items: Array<{
      __typename: "Application";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    website: string;
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;
    image: string;
    account: {
      __typename: "Account";
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    };
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categories: {
      __typename: "ModelCategoryConnection";
      nextToken: string | null;
    } | null;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateApplicationSubscription = {
  __typename: "Application";
  id: string;
  title: string;
  job: {
    __typename: "Job";
    id: string;
    title: string;
    description: string;
    createDate: string;
    expireDate: string;
    applications: {
      __typename: "ModelApplicationConnection";
      nextToken: string | null;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateApplicationSubscription = {
  __typename: "Application";
  id: string;
  title: string;
  job: {
    __typename: "Job";
    id: string;
    title: string;
    description: string;
    createDate: string;
    expireDate: string;
    applications: {
      __typename: "ModelApplicationConnection";
      nextToken: string | null;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteApplicationSubscription = {
  __typename: "Application";
  id: string;
  title: string;
  job: {
    __typename: "Job";
    id: string;
    title: string;
    description: string;
    createDate: string;
    expireDate: string;
    applications: {
      __typename: "ModelApplicationConnection";
      nextToken: string | null;
    } | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      description: string;
      website: string;
      street: string;
      houseNumber: string;
      postcode: number;
      city: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreatePrivateNote(
    input: CreatePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<CreatePrivateNoteMutation> {
    const statement = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        createPrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePrivateNoteMutation>response.data.createPrivateNote;
  }
  async UpdatePrivateNote(
    input: UpdatePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<UpdatePrivateNoteMutation> {
    const statement = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        updatePrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePrivateNoteMutation>response.data.updatePrivateNote;
  }
  async DeletePrivateNote(
    input: DeletePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<DeletePrivateNoteMutation> {
    const statement = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        deletePrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePrivateNoteMutation>response.data.deletePrivateNote;
  }
  async CreateAccount(
    input: CreateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<CreateAccountMutation> {
    const statement = `mutation CreateAccount($input: CreateAccountInput!, $condition: ModelAccountConditionInput) {
        createAccount(input: $input, condition: $condition) {
          __typename
          id
          type
          user {
            __typename
            id
            prename
            lastname
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAccountMutation>response.data.createAccount;
  }
  async UpdateAccount(
    input: UpdateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<UpdateAccountMutation> {
    const statement = `mutation UpdateAccount($input: UpdateAccountInput!, $condition: ModelAccountConditionInput) {
        updateAccount(input: $input, condition: $condition) {
          __typename
          id
          type
          user {
            __typename
            id
            prename
            lastname
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAccountMutation>response.data.updateAccount;
  }
  async DeleteAccount(
    input: DeleteAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<DeleteAccountMutation> {
    const statement = `mutation DeleteAccount($input: DeleteAccountInput!, $condition: ModelAccountConditionInput) {
        deleteAccount(input: $input, condition: $condition) {
          __typename
          id
          type
          user {
            __typename
            id
            prename
            lastname
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAccountMutation>response.data.deleteAccount;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          prename
          lastname
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          prename
          lastname
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          prename
          lastname
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateCompany(
    input: CreateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {
        createCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          website
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!, $condition: ModelCompanyConditionInput) {
        updateCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          website
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!, $condition: ModelCompanyConditionInput) {
        deleteCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          website
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          categories {
            __typename
            items {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          categories {
            __typename
            items {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          categories {
            __typename
            items {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateJob(
    input: CreateJobInput,
    condition?: ModelJobConditionInput
  ): Promise<CreateJobMutation> {
    const statement = `mutation CreateJob($input: CreateJobInput!, $condition: ModelJobConditionInput) {
        createJob(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          createDate
          expireDate
          applications {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
            }
            nextToken
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJobMutation>response.data.createJob;
  }
  async UpdateJob(
    input: UpdateJobInput,
    condition?: ModelJobConditionInput
  ): Promise<UpdateJobMutation> {
    const statement = `mutation UpdateJob($input: UpdateJobInput!, $condition: ModelJobConditionInput) {
        updateJob(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          createDate
          expireDate
          applications {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
            }
            nextToken
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJobMutation>response.data.updateJob;
  }
  async DeleteJob(
    input: DeleteJobInput,
    condition?: ModelJobConditionInput
  ): Promise<DeleteJobMutation> {
    const statement = `mutation DeleteJob($input: DeleteJobInput!, $condition: ModelJobConditionInput) {
        deleteJob(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          createDate
          expireDate
          applications {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
            }
            nextToken
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJobMutation>response.data.deleteJob;
  }
  async CreateApplication(
    input: CreateApplicationInput,
    condition?: ModelApplicationConditionInput
  ): Promise<CreateApplicationMutation> {
    const statement = `mutation CreateApplication($input: CreateApplicationInput!, $condition: ModelApplicationConditionInput) {
        createApplication(input: $input, condition: $condition) {
          __typename
          id
          title
          job {
            __typename
            id
            title
            description
            createDate
            expireDate
            applications {
              __typename
              nextToken
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateApplicationMutation>response.data.createApplication;
  }
  async UpdateApplication(
    input: UpdateApplicationInput,
    condition?: ModelApplicationConditionInput
  ): Promise<UpdateApplicationMutation> {
    const statement = `mutation UpdateApplication($input: UpdateApplicationInput!, $condition: ModelApplicationConditionInput) {
        updateApplication(input: $input, condition: $condition) {
          __typename
          id
          title
          job {
            __typename
            id
            title
            description
            createDate
            expireDate
            applications {
              __typename
              nextToken
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateApplicationMutation>response.data.updateApplication;
  }
  async DeleteApplication(
    input: DeleteApplicationInput,
    condition?: ModelApplicationConditionInput
  ): Promise<DeleteApplicationMutation> {
    const statement = `mutation DeleteApplication($input: DeleteApplicationInput!, $condition: ModelApplicationConditionInput) {
        deleteApplication(input: $input, condition: $condition) {
          __typename
          id
          title
          job {
            __typename
            id
            title
            description
            createDate
            expireDate
            applications {
              __typename
              nextToken
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteApplicationMutation>response.data.deleteApplication;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  async GetPrivateNote(id: string): Promise<GetPrivateNoteQuery> {
    const statement = `query GetPrivateNote($id: ID!) {
        getPrivateNote(id: $id) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPrivateNoteQuery>response.data.getPrivateNote;
  }
  async ListPrivateNotes(
    filter?: ModelPrivateNoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPrivateNotesQuery> {
    const statement = `query ListPrivateNotes($filter: ModelPrivateNoteFilterInput, $limit: Int, $nextToken: String) {
        listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPrivateNotesQuery>response.data.listPrivateNotes;
  }
  async GetAccount(id: string): Promise<GetAccountQuery> {
    const statement = `query GetAccount($id: ID!) {
        getAccount(id: $id) {
          __typename
          id
          type
          user {
            __typename
            id
            prename
            lastname
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAccountQuery>response.data.getAccount;
  }
  async ListAccounts(
    filter?: ModelAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAccountsQuery> {
    const statement = `query ListAccounts($filter: ModelAccountFilterInput, $limit: Int, $nextToken: String) {
        listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAccountsQuery>response.data.listAccounts;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          prename
          lastname
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            prename
            lastname
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          name
          description
          website
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompanyQuery>response.data.getCompany;
  }
  async ListCompanys(
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCompanysQuery> {
    const statement = `query ListCompanys($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompanysQuery>response.data.listCompanys;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          title
          description
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          categories {
            __typename
            items {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategorys(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategorysQuery> {
    const statement = `query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategorysQuery>response.data.listCategorys;
  }
  async GetJob(id: string): Promise<GetJobQuery> {
    const statement = `query GetJob($id: ID!) {
        getJob(id: $id) {
          __typename
          id
          title
          description
          createDate
          expireDate
          applications {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
            }
            nextToken
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJobQuery>response.data.getJob;
  }
  async ListJobs(
    filter?: ModelJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJobsQuery> {
    const statement = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
        listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            createDate
            expireDate
            applications {
              __typename
              nextToken
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListJobsQuery>response.data.listJobs;
  }
  async GetApplication(id: string): Promise<GetApplicationQuery> {
    const statement = `query GetApplication($id: ID!) {
        getApplication(id: $id) {
          __typename
          id
          title
          job {
            __typename
            id
            title
            description
            createDate
            expireDate
            applications {
              __typename
              nextToken
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetApplicationQuery>response.data.getApplication;
  }
  async ListApplications(
    filter?: ModelApplicationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListApplicationsQuery> {
    const statement = `query ListApplications($filter: ModelApplicationFilterInput, $limit: Int, $nextToken: String) {
        listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            job {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListApplicationsQuery>response.data.listApplications;
  }
  OnCreateTaskListener: Observable<
    SubscriptionResponse<OnCreateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaskSubscription>>;

  OnUpdateTaskListener: Observable<
    SubscriptionResponse<OnUpdateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaskSubscription>>;

  OnDeleteTaskListener: Observable<
    SubscriptionResponse<OnDeleteTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaskSubscription>>;

  OnCreatePrivateNoteListener: Observable<
    SubscriptionResponse<OnCreatePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePrivateNote($owner: String!) {
        onCreatePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePrivateNoteSubscription>>;

  OnUpdatePrivateNoteListener: Observable<
    SubscriptionResponse<OnUpdatePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePrivateNote($owner: String!) {
        onUpdatePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePrivateNoteSubscription>>;

  OnDeletePrivateNoteListener: Observable<
    SubscriptionResponse<OnDeletePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePrivateNote($owner: String!) {
        onDeletePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePrivateNoteSubscription>>;

  OnCreateAccountListener: Observable<
    SubscriptionResponse<OnCreateAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAccount {
        onCreateAccount {
          __typename
          id
          type
          user {
            __typename
            id
            prename
            lastname
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAccountSubscription>>;

  OnUpdateAccountListener: Observable<
    SubscriptionResponse<OnUpdateAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAccount {
        onUpdateAccount {
          __typename
          id
          type
          user {
            __typename
            id
            prename
            lastname
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAccountSubscription>>;

  OnDeleteAccountListener: Observable<
    SubscriptionResponse<OnDeleteAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAccount {
        onDeleteAccount {
          __typename
          id
          type
          user {
            __typename
            id
            prename
            lastname
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAccountSubscription>>;

  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          prename
          lastname
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          prename
          lastname
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          prename
          lastname
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateCompanyListener: Observable<
    SubscriptionResponse<OnCreateCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
          __typename
          id
          name
          description
          website
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCompanySubscription>>;

  OnUpdateCompanyListener: Observable<
    SubscriptionResponse<OnUpdateCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
          __typename
          id
          name
          description
          website
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCompanySubscription>>;

  OnDeleteCompanyListener: Observable<
    SubscriptionResponse<OnDeleteCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
          __typename
          id
          name
          description
          website
          street
          houseNumber
          postcode
          city
          image
          account {
            __typename
            id
            type
            user {
              __typename
              id
              prename
              lastname
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCompanySubscription>>;

  OnCreateCategoryListener: Observable<
    SubscriptionResponse<OnCreateCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          title
          description
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          categories {
            __typename
            items {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCategorySubscription>>;

  OnUpdateCategoryListener: Observable<
    SubscriptionResponse<OnUpdateCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          title
          description
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          categories {
            __typename
            items {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCategorySubscription>>;

  OnDeleteCategoryListener: Observable<
    SubscriptionResponse<OnDeleteCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          title
          description
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              createdAt
              updatedAt
            }
            nextToken
          }
          categories {
            __typename
            items {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCategorySubscription>>;

  OnCreateJobListener: Observable<
    SubscriptionResponse<OnCreateJobSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateJob {
        onCreateJob {
          __typename
          id
          title
          description
          createDate
          expireDate
          applications {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
            }
            nextToken
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateJobSubscription>>;

  OnUpdateJobListener: Observable<
    SubscriptionResponse<OnUpdateJobSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateJob {
        onUpdateJob {
          __typename
          id
          title
          description
          createDate
          expireDate
          applications {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
            }
            nextToken
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateJobSubscription>>;

  OnDeleteJobListener: Observable<
    SubscriptionResponse<OnDeleteJobSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteJob {
        onDeleteJob {
          __typename
          id
          title
          description
          createDate
          expireDate
          applications {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
            }
            nextToken
          }
          company {
            __typename
            id
            name
            description
            website
            street
            houseNumber
            postcode
            city
            image
            account {
              __typename
              id
              type
              createdAt
              updatedAt
            }
            jobs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categories {
              __typename
              nextToken
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteJobSubscription>>;

  OnCreateApplicationListener: Observable<
    SubscriptionResponse<OnCreateApplicationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApplication {
        onCreateApplication {
          __typename
          id
          title
          job {
            __typename
            id
            title
            description
            createDate
            expireDate
            applications {
              __typename
              nextToken
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateApplicationSubscription>>;

  OnUpdateApplicationListener: Observable<
    SubscriptionResponse<OnUpdateApplicationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApplication {
        onUpdateApplication {
          __typename
          id
          title
          job {
            __typename
            id
            title
            description
            createDate
            expireDate
            applications {
              __typename
              nextToken
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateApplicationSubscription>>;

  OnDeleteApplicationListener: Observable<
    SubscriptionResponse<OnDeleteApplicationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApplication {
        onDeleteApplication {
          __typename
          id
          title
          job {
            __typename
            id
            title
            description
            createDate
            expireDate
            applications {
              __typename
              nextToken
            }
            company {
              __typename
              id
              name
              description
              website
              street
              houseNumber
              postcode
              city
              image
              createdAt
              updatedAt
            }
            category {
              __typename
              id
              title
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteApplicationSubscription>>;
}
