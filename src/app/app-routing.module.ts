import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
 {
   path:'',
   redirectTo: 'home',
   pathMatch: 'full'
 },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'apprenticeships',
    loadChildren: () => import('./pages/apprenticeships/apprenticeships.module').then( m => m.ApprenticeshipsPageModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./pages/companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./pages/job/job.module').then( m => m.JobPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'apprenticeships',
    loadChildren: () => import('./pages/apprenticeships/apprenticeships.module').then( m => m.ApprenticeshipsPageModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./pages/companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule),
    
  },
  { 
    path: 'job/:id', loadChildren: () => import('./pages/job/job.module').then( m => m.JobPageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
