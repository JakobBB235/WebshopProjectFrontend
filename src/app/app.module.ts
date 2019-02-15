import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ProductsComponent } from './products/products.component';
import { PortalComponent } from './portal/portal.component';
import { CreateProductComponent } from './portal/create-product/create-product.component';
import { MyProductsComponent } from './portal/my-products/my-products.component';
import { EditProductComponent } from './portal/edit-product/edit-product.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component'
import {MatCardModule} from '@angular/material/card';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ManageAccountComponent } from './portal/manage-account/manage-account.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    PortalComponent,
    CreateProductComponent,
    MyProductsComponent,
    EditProductComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ViewProductComponent,
    ManageAccountComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
