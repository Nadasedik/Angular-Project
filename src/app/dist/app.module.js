"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var AddProduct_component_1 = require("./Components/AddProduct/AddProduct.component");
var Layout_component_1 = require("./Components/Layout/Layout.component");
var LoginForm_component_1 = require("./Components/LoginForm/LoginForm.component");
var NotFoundPage_component_1 = require("./Components/NotFoundPage/NotFoundPage.component");
var MainPage_component_1 = require("./Components/MainPage/MainPage.component");
var SideMenu_component_1 = require("./Components/SideMenu/SideMenu.component");
var Products_component_1 = require("./Components/Products/Products.component");
var Footer_component_1 = require("./Components/Footer/Footer.component");
var Header_component_1 = require("./Components/Header/Header.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var slider_1 = require("@angular/material/slider");
var button_1 = require("@angular/material/button");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var product_card_directive_1 = require("./Directive/product-card.directive");
var egyptian_national_id_pipe_1 = require("./Pipes/egyptian-national-id.pipe");
var creditcard_pipe_1 = require("./Pipes/creditcard.pipe");
var OrderMaster_component_1 = require("./Components/Order/OrderMaster/OrderMaster.component");
var common_1 = require("@angular/common");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                Header_component_1.HeaderComponent,
                Footer_component_1.FooterComponent,
                Products_component_1.ProductsComponent,
                SideMenu_component_1.SideMenuComponent,
                product_card_directive_1.ProductCardDirective,
                egyptian_national_id_pipe_1.EgyptianNationalIDPipe,
                creditcard_pipe_1.CreditcardPipe,
                OrderMaster_component_1.OrderMasterComponent,
                MainPage_component_1.MainPageComponent,
                NotFoundPage_component_1.NotFoundPageComponent,
                LoginForm_component_1.LoginFormComponent,
                Layout_component_1.LayoutComponent,
                AddProduct_component_1.AddProductComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                slider_1.MatSliderModule,
                button_1.MatButtonModule,
                forms_1.FormsModule,
                common_1.CommonModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
