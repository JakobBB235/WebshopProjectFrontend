import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // Subrouting children
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent}

  // Always put this last to avoid errors
  // {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
