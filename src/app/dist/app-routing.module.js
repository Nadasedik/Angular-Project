"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var ProductDetails_component_1 = require("./Components/ProductDetails/ProductDetails.component");
var Layout_component_1 = require("./Components/Layout/Layout.component");
var LoginForm_component_1 = require("./Components/LoginForm/LoginForm.component");
var NotFoundPage_component_1 = require("./Components/NotFoundPage/NotFoundPage.component");
var MainPage_component_1 = require("./Components/MainPage/MainPage.component");
var OrderMaster_component_1 = require("./Components/Order/OrderMaster/OrderMaster.component");
var Products_component_1 = require("./Components/Products/Products.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AddProduct_component_1 = require("./Components/AddProduct/AddProduct.component");
var UpdateProduct_component_1 = require("./Components/UpdateProduct/UpdateProduct.component");
var routes = [
    { path: '', component: Layout_component_1.LayoutComponent, children: [
            { path: '', redirectTo: '/Home', pathMatch: 'full' },
            { path: 'Home', component: MainPage_component_1.MainPageComponent },
            { path: 'Products', component: Products_component_1.ProductsComponent },
            { path: 'Products/:pid', component: ProductDetails_component_1.ProductDetailsComponent },
            { path: 'Order', component: OrderMaster_component_1.OrderMasterComponent },
            { path: 'AddProduct', component: AddProduct_component_1.AddProductComponent },
            { path: 'UpdateProduct/:pid', component: UpdateProduct_component_1.UpdateProductComponent }
        ] },
    { path: 'Login', component: LoginForm_component_1.LoginFormComponent },
    { path: '**', component: NotFoundPage_component_1.NotFoundPageComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
