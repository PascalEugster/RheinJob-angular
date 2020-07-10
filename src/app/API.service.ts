/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

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
};

export type DeleteCompanyInput = {
  id?: string | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  title: string;
  description: string;
  categoryID: string;
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
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

export type UpdateCategoryInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
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
  companyID: string;
};

export type ModelJobConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  createDate?: ModelStringInput | null;
  expireDate?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
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
  companyID?: string | null;
};

export type DeleteJobInput = {
  id?: string | null;
};

export type CreateApplicationInput = {
  id?: string | null;
  title: string;
  jobID: string;
};

export type ModelApplicationConditionInput = {
  title?: ModelStringInput | null;
  jobID?: ModelIDInput | null;
  and?: Array<ModelApplicationConditionInput | null> | null;
  or?: Array<ModelApplicationConditionInput | null> | null;
  not?: ModelApplicationConditionInput | null;
};

export type UpdateApplicationInput = {
  id: string;
  title?: string | null;
  jobID?: string | null;
};

export type DeleteApplicationInput = {
  id?: string | null;
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
  categoryID?: ModelIDInput | null;
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
  companyID?: ModelIDInput | null;
  and?: Array<ModelJobFilterInput | null> | null;
  or?: Array<ModelJobFilterInput | null> | null;
  not?: ModelJobFilterInput | null;
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  jobID?: ModelIDInput | null;
  and?: Array<ModelApplicationFilterInput | null> | null;
  or?: Array<ModelApplicationFilterInput | null> | null;
  not?: ModelApplicationFilterInput | null;
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
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      companyID: string;
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
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      companyID: string;
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
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      companyID: string;
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
      companyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categoryID: string;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categoryID: string;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      categoryID: string;
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
      companyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categoryID: string;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categoryID: string;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      categoryID: string;
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
      companyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categoryID: string;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categoryID: string;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      categoryID: string;
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
      jobID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companyID: string;
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
      jobID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companyID: string;
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
      jobID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companyID: string;
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

export type CreateApplicationMutation = {
  __typename: "Application";
  id: string;
  title: string;
  jobID: string;
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
    companyID: string;
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
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateApplicationMutation = {
  __typename: "Application";
  id: string;
  title: string;
  jobID: string;
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
    companyID: string;
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
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteApplicationMutation = {
  __typename: "Application";
  id: string;
  title: string;
  jobID: string;
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
    companyID: string;
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
  } | null;
  createdAt: string;
  updatedAt: string;
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
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      companyID: string;
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
      companyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categoryID: string;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categoryID: string;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      categoryID: string;
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
    categoryID: string;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      categoryID: string;
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
      jobID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companyID: string;
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
    companyID: string;
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

export type GetApplicationQuery = {
  __typename: "Application";
  id: string;
  title: string;
  jobID: string;
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
    companyID: string;
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
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListApplicationsQuery = {
  __typename: "ModelApplicationConnection";
  items: Array<{
    __typename: "Application";
    id: string;
    title: string;
    jobID: string;
    job: {
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      companyID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
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
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      companyID: string;
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
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      companyID: string;
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
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      description: string;
      createDate: string;
      expireDate: string;
      companyID: string;
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
      companyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categoryID: string;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categoryID: string;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      categoryID: string;
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
      companyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categoryID: string;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categoryID: string;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      categoryID: string;
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
      companyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  categoryID: string;
  category: {
    __typename: "Category";
    id: string;
    title: string;
    description: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    categoryID: string;
    category: {
      __typename: "Category";
      id: string;
      title: string;
      description: string;
      categoryID: string;
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
      jobID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companyID: string;
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
      jobID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companyID: string;
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
      jobID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  companyID: string;
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

export type OnCreateApplicationSubscription = {
  __typename: "Application";
  id: string;
  title: string;
  jobID: string;
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
    companyID: string;
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
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateApplicationSubscription = {
  __typename: "Application";
  id: string;
  title: string;
  jobID: string;
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
    companyID: string;
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
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteApplicationSubscription = {
  __typename: "Application";
  id: string;
  title: string;
  jobID: string;
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
    companyID: string;
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
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
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
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              companyID
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
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              companyID
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
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              companyID
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
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          categoryID
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categoryID
            category {
              __typename
              id
              title
              description
              categoryID
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
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          categoryID
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categoryID
            category {
              __typename
              id
              title
              description
              categoryID
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
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          categoryID
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categoryID
            category {
              __typename
              id
              title
              description
              categoryID
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
              jobID
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
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
              jobID
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
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
              jobID
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
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
          jobID
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
            companyID
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
          jobID
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
            companyID
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
          jobID
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
            companyID
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
    return <DeleteApplicationMutation>response.data.deleteApplication;
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
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              companyID
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
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          categoryID
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categoryID
            category {
              __typename
              id
              title
              description
              categoryID
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
            categoryID
            category {
              __typename
              id
              title
              description
              categoryID
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
              jobID
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
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
            companyID
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
    return <ListJobsQuery>response.data.listJobs;
  }
  async GetApplication(id: string): Promise<GetApplicationQuery> {
    const statement = `query GetApplication($id: ID!) {
        getApplication(id: $id) {
          __typename
          id
          title
          jobID
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
            companyID
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
            jobID
            job {
              __typename
              id
              title
              description
              createDate
              expireDate
              companyID
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
  OnCreateCompanyListener: Observable<
    OnCreateCompanySubscription
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
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              companyID
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
  ) as Observable<OnCreateCompanySubscription>;

  OnUpdateCompanyListener: Observable<
    OnUpdateCompanySubscription
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
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              companyID
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
  ) as Observable<OnUpdateCompanySubscription>;

  OnDeleteCompanyListener: Observable<
    OnDeleteCompanySubscription
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
          jobs {
            __typename
            items {
              __typename
              id
              title
              description
              createDate
              expireDate
              companyID
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
  ) as Observable<OnDeleteCompanySubscription>;

  OnCreateCategoryListener: Observable<
    OnCreateCategorySubscription
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
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          categoryID
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categoryID
            category {
              __typename
              id
              title
              description
              categoryID
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
  ) as Observable<OnCreateCategorySubscription>;

  OnUpdateCategoryListener: Observable<
    OnUpdateCategorySubscription
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
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          categoryID
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categoryID
            category {
              __typename
              id
              title
              description
              categoryID
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
  ) as Observable<OnUpdateCategorySubscription>;

  OnDeleteCategoryListener: Observable<
    OnDeleteCategorySubscription
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
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          categoryID
          category {
            __typename
            id
            title
            description
            jobs {
              __typename
              nextToken
            }
            categoryID
            category {
              __typename
              id
              title
              description
              categoryID
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
  ) as Observable<OnDeleteCategorySubscription>;

  OnCreateJobListener: Observable<OnCreateJobSubscription> = API.graphql(
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
              jobID
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
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
  ) as Observable<OnCreateJobSubscription>;

  OnUpdateJobListener: Observable<OnUpdateJobSubscription> = API.graphql(
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
              jobID
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
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
  ) as Observable<OnUpdateJobSubscription>;

  OnDeleteJobListener: Observable<OnDeleteJobSubscription> = API.graphql(
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
              jobID
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
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
  ) as Observable<OnDeleteJobSubscription>;

  OnCreateApplicationListener: Observable<
    OnCreateApplicationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApplication {
        onCreateApplication {
          __typename
          id
          title
          jobID
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
            companyID
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
  ) as Observable<OnCreateApplicationSubscription>;

  OnUpdateApplicationListener: Observable<
    OnUpdateApplicationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApplication {
        onUpdateApplication {
          __typename
          id
          title
          jobID
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
            companyID
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
  ) as Observable<OnUpdateApplicationSubscription>;

  OnDeleteApplicationListener: Observable<
    OnDeleteApplicationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApplication {
        onDeleteApplication {
          __typename
          id
          title
          jobID
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
            companyID
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
  ) as Observable<OnDeleteApplicationSubscription>;
}
