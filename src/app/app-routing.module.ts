import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { PortalComponent } from './portal/portal.component';
import { CreateProductComponent } from './portal/create-product/create-product.component';
import { EditProductComponent } from './portal/edit-product/edit-product.component';
import { MyProductsComponent } from './portal/my-products/my-products.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // Subrouting children
  {path: 'home', component: HomeComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},

  {path: 'products', component: ProductsComponent, children: [
    {path: ':item-id', component: ViewProductComponent}
  ]},

  {path: 'portal', component: PortalComponent, children: [
    {path: 'register', component: CreateProductComponent},
    {path: 'edit', component: EditProductComponent},
    {path: 'myproducts', component: MyProductsComponent}
  ]},

  // Always put this last to avoid errors
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
