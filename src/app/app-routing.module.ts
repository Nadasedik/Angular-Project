import { ProductDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { LayoutComponent } from './Components/Layout/Layout.component';
import { LoginFormComponent } from './Components/LoginForm/LoginForm.component';
import { NotFoundPageComponent } from './Components/NotFoundPage/NotFoundPage.component';
import { MainPageComponent } from './Components/MainPage/MainPage.component';
import { OrderMasterComponent } from './Components/Order/OrderMaster/OrderMaster.component';
import { ProductsComponent } from './Components/Products/Products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/AddProduct/AddProduct.component';
import { UpdateProductComponent } from './Components/UpdateProduct/UpdateProduct.component';
const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:MainPageComponent},
    {path:'Products',component:ProductsComponent},
    {path:'Products/:pid',component:ProductDetailsComponent},
    {path:'Order',component:OrderMasterComponent},
    {path:'AddProduct',component:AddProductComponent},
    {path:'UpdateProduct/:pid',component:UpdateProductComponent}
  ]},
  {path:'Login', component:LoginFormComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
