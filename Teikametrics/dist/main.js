(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_free_trial_free_trial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/free-trial/free-trial.component */ "./src/app/components/free-trial/free-trial.component.ts");
/* harmony import */ var _components_inclusions_inclusions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inclusions/inclusions.component */ "./src/app/components/inclusions/inclusions.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/resources/resources.component */ "./src/app/components/resources/resources.component.ts");
/* harmony import */ var _components_webpage_webpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/webpage/webpage.component */ "./src/app/components/webpage/webpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
                _components_free_trial_free_trial_component__WEBPACK_IMPORTED_MODULE_8__["FreeTrialComponent"],
                _components_inclusions_inclusions_component__WEBPACK_IMPORTED_MODULE_9__["InclusionsComponent"],
                _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_10__["CustomersComponent"],
                _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_11__["ResourcesComponent"],
                _components_webpage_webpage_component__WEBPACK_IMPORTED_MODULE_12__["WebpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["Routing"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_webpage_webpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/webpage/webpage.component */ "./src/app/components/webpage/webpage.component.ts");


var APP_ROUTES = [
    { path: '', component: _components_webpage_webpage_component__WEBPACK_IMPORTED_MODULE_1__["WebpageComponent"] }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/customers/customers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/customers/customers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    margin-top: 100px;\r\n    margin-left: 100px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.background img {\r\n    -webkit-filter: grayscale(1);\r\n            filter: grayscale(1);\r\n    margin-top: 50px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 50%;\r\n}\r\n\r\n.background .fix-margin{\r\n    margin-top: 30px;\r\n}\r\n\r\n.background .fix-width {\r\n    margin-top: 75px;\r\n    width: 100%;\r\n}\r\n\r\n.background h6 {\r\n    color: #7B81EA;\r\n    font-size: smaller;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.background h3 {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: larger;\r\n    font-weight: bold;\r\n}\r\n\r\n.purple-border:after {\r\n    content: '';\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 5%;\r\n    padding-top: 20px;\r\n    border-bottom: solid #7B81EA;\r\n}\r\n\r\n.background .row {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 75%;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .background img{\r\n        display: block;\r\n        width: 50%;\r\n    }\r\n    .background .fix-width {\r\n        margin-top: 50px;\r\n        width: 100%;\r\n    }\r\n    .background {\r\n        margin-right: 25px;\r\n        margin-left: 25px;\r\n    }\r\n\r\n    .purple-border:after {\r\n        width: 25%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBDQUEwQztDQUM3Qzs7QUFFRDtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztDQUNkOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQjs7QUFHRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNkJBQTZCO0NBQ2hDOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO0tBQ2Q7SUFDRDtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO0tBQ2Y7SUFDRDtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhY2tncm91bmQgaW1nIHtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJhY2tncm91bmQgLmZpeC1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCAuZml4LXdpZHRoIHtcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJhY2tncm91bmQgaDYge1xyXG4gICAgY29sb3I6ICM3QjgxRUE7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4ucHVycGxlLWJvcmRlcjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICM3QjgxRUE7XHJcbn1cclxuLmJhY2tncm91bmQgLnJvdyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJhY2tncm91bmQgaW1ne1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuYmFja2dyb3VuZCAuZml4LXdpZHRoIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAucHVycGxlLWJvcmRlcjphZnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/customers/customers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/customers/customers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n    <h6>MEET OUR CUSTOMERS</h6>\n    <div class=\"purple-border\">\n        <h3>A few of our growing list of successful Amazon sellers</h3>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-3\">\n            <span>\n                <img src=\"../../../assets/images/tech-armor.svg\"/>\n            </span>\n        </div>\n        <div class=\"col-lg-3\">\n            <span>\n                <img class=\"fix-width\" src=\"../../../assets/images/mark-cuban.svg\"/>\n            </span>\n        </div>\n        <div class=\"col-lg-3\">\n            <img class=\"fix-margin\" src=\"../../../assets/images/green-gobbler.svg\">\n        </div>\n        <div class=\"col-lg-3\">\n            <img src=\"../../../assets/images/kiss-my-keto.svg\"/>\n        </div>\n        <div class=\"w-100\">\n        </div>\n        <div class=\"col-lg-3\">\n            <img class=\"fix-margin\" src=\"../../../assets/images/hyperikon.svg\"/>\n        </div>\n        <div class=\"col-lg-3\">\n            <img src=\"../../../assets/images/tipsey-elves.svg\"/>\n        </div>\n        <div class=\"col-lg-3\">\n            <img class=\"fix-margin\" src=\"../../../assets/images/nutpods.svg\"/>\n        </div>\n        <div class=\"col-lg-3\">\n            <img src=\"../../../assets/images/marathon-sports.svg\"/>\n        </div>\n        <div class=\"w-100\">\n        </div>\n        <div class=\"col-lg-3\">\n            <img class=\"\" src=\"../../../assets/images/power-practical.svg\"/>\n        </div>\n        <div class=\"col-lg-3\">\n            <img src=\"../../../assets/images/elizabeth-mott.svg\"/>\n        </div>\n        <div class=\"col-lg-3\">\n            <img src=\"../../../assets/images/pavoi.svg\"/>\n        </div>\n        <div class=\"col-lg-3\">\n            <img src=\"../../../assets/images/thursday-boots.svg\"/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/customers/customers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/customers/customers.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomersComponent = /** @class */ (function () {
    function CustomersComponent() {
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/components/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/components/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-padding {\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n}\r\n.component-border:before {\r\n    content: '';\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n    width: 85%;\r\n    border-top: 1px solid whitesmoke;\r\n}\r\n.pull-right {\r\n    float: right;\r\n}\r\n.pad-left {\r\n    padding-left: 100px;\r\n}\r\n.small-font {\r\n    font-size: small;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: darkgrey;\r\n}\r\n.spaces span{\r\n    margin-left: 40px;\r\n}\r\n.spaces, .space {\r\n    margin-bottom: 30px;\r\n}\r\n.space img{\r\n    margin-left: 20px;\r\n}\r\n.bolded {\r\n    font-weight: bold;\r\n}\r\n.black-font {\r\n    color: black;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .small-centered {\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n    }\r\n    .spaces span {\r\n        margin-left: 50px;\r\n        display: block;\r\n        margin-bottom: 10px;\r\n    }\r\n    .space img {\r\n        margin-left: 30px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7S0FDckI7SUFDRDtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFDSSxrQkFBa0I7S0FDckI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtcGFkZGluZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG4uY29tcG9uZW50LWJvcmRlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5wYWQtbGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi5zbWFsbC1mb250IHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxufVxyXG5cclxuLnNwYWNlcyBzcGFue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zcGFjZXMsIC5zcGFjZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc3BhY2UgaW1ne1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib2xkZWQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ibGFjay1mb250IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnNtYWxsLWNlbnRlcmVkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc3BhY2VzIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3BhY2UgaW1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<div class=\"component-border\">\n    <nav class=\"navbar page-padding bg-white small-font\">\n        <a class=\"navbar-brand small-centered\" href=\"#\">\n            <img class=\"\" src=\"../../../assets/images/teikametrics.svg\">\n            <div>\n                <p class=\"navbar-text small-font\"> Copyright &copy; 2015-2017 teikametrics </p>\n            </div>\n        </a>\n        <div class=\"navbar-text\">\n            <div class=\"spaces black-font\">\n                <span class=\"\" href=\"#\">Privacy Policy</span>\n                <span class=\"\" href=\"#\">Terms & Conditions</span>\n                <span class=\"bolded\" href=\"#\">Made with\n                <img src=\"../../../assets/images/heart.svg\"/>\n                in Boston\n            </span>\n            </div>\n            <div class=\"pull-right space\">\n                <img src=\"../../../assets/images/facebook.svg\">\n                <img src=\"../../../assets/images/twitter.svg\">\n                <img src=\"../../../assets/images/linkedin.svg\">\n                <img src=\"../../../assets/images/youtube.svg\">\n                <img src=\"../../../assets/images/angelco.svg\">\n            </div>\n        </div>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/free-trial/free-trial.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/free-trial/free-trial.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    background-color: #f3f3f3;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    border-radius: 10px;\r\n    padding: 40px;\r\n    margin-top: 25px;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n.small-font {\r\n    font-size: smaller;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    color: dimgrey;\r\n}\r\n\r\n.small-font footer {\r\n    font-size: xx-small;\r\n    position: relative;\r\n    float: right;\r\n}\r\n\r\n.trial-text {\r\n    width: 50%;\r\n    margin-right: 300px;\r\n}\r\n\r\n.trial-text h6 {\r\n    font-weight: lighter;\r\n    /*font-size*/\r\n}\r\n\r\n.button-color {\r\n    background-color: #7B81EA;\r\n    color: white;\r\n    border-bottom-left-radius: 1px;\r\n    border-top-left-radius: 1px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}\r\n\r\n.display-inline {\r\n    display: inline-flex;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .button-color {\r\n        padding: .375rem .75rem;\r\n    }\r\n    .small-centered {\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n        width: 100%;\r\n    }\r\n    .background {\r\n        padding: 20px;\r\n        margin: 40px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmVlLXRyaWFsL2ZyZWUtdHJpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFDRDtJQUNJO1FBQ0ksd0JBQXdCO0tBQzNCO0lBQ0Q7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFlBQVk7S0FDZjtJQUNEO1FBQ0ksY0FBYztRQUNkLGFBQWE7S0FDaEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJlZS10cmlhbC9mcmVlLXRyaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4uc21hbGwtZm9udCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGRpbWdyZXk7XHJcbn1cclxuXHJcbi5zbWFsbC1mb250IGZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udHJpYWwtdGV4dCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnRyaWFsLXRleHQgaDYge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAvKmZvbnQtc2l6ZSovXHJcbn1cclxuXHJcbi5idXR0b24tY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdCODFFQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmRpc3BsYXktaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5idXR0b24tY29sb3Ige1xyXG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgfVxyXG4gICAgLnNtYWxsLWNlbnRlcmVkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBtYXJnaW46IDQwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/free-trial/free-trial.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/free-trial/free-trial.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n    <form class=\"form-inline\">\n        <div class=\"trial-text small-centered\">\n            <h2>\n                Start your free trial\n            </h2>\n            <h6>Start your 30-day free trial of the Sponsored Products Optimizer. All features included.</h6>\n        </div>\n        <div class=\"small-font small-centered\">\n            <div class=\"input-group\">\n                <input class=\"form-control small-font\" type=\"email\" placeholder=\"Enter your email\"/>\n                <button class=\"small-font input-group-append btn button-color\" type=\"submit\">\n                    Get Started\n                </button>\n            </div>\n            <footer>30-Day Free Trial &middot; Starting at $99/month &middot; Cancel Anytime</footer>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/free-trial/free-trial.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/free-trial/free-trial.component.ts ***!
  \***************************************************************/
/*! exports provided: FreeTrialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeTrialComponent", function() { return FreeTrialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FreeTrialComponent = /** @class */ (function () {
    function FreeTrialComponent() {
    }
    FreeTrialComponent.prototype.ngOnInit = function () {
    };
    FreeTrialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-free-trial',
            template: __webpack_require__(/*! ./free-trial.component.html */ "./src/app/components/free-trial/free-trial.component.html"),
            styles: [__webpack_require__(/*! ./free-trial.component.css */ "./src/app/components/free-trial/free-trial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FreeTrialComponent);
    return FreeTrialComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    margin-right: 50px;\r\n    margin-left: 50px;\r\n}\r\n.small-centered {\r\n    margin-right: auto;\r\n    margin-left: 20px;\r\n    width: 50%;\r\n}\r\n.small-font {\r\n    font-size: smaller;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    color: dimgrey;\r\n}\r\n.button-color {\r\n    background-color: #7B81EA;\r\n    color: white;\r\n    border-bottom-left-radius: 1px;\r\n    border-top-left-radius: 1px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}\r\n.word-space {\r\n    padding-right: 45px;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .extra-top-padding {\r\n        padding-left: 50px;\r\n        margin-right: auto;\r\n        margin-left: 50px;\r\n        width: 100%;\r\n        padding-bottom: 10px;\r\n    }\r\n    .button-color {\r\n        padding: .375rem .75rem;\r\n    }\r\n    .small-centered {\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1oscUJBQXFCO0tBQ3hCO0lBQ0Q7UUFDSSx3QkFBd0I7S0FDM0I7SUFDRDtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsV0FBVztLQUNkO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi5zbWFsbC1jZW50ZXJlZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5zbWFsbC1mb250IHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogZGltZ3JleTtcclxufVxyXG5cclxuLmJ1dHRvbi1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0I4MUVBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG4ud29yZC1zcGFjZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5leHRyYS10b3AtcGFkZGluZyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5idXR0b24tY29sb3Ige1xyXG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgfVxyXG4gICAgLnNtYWxsLWNlbnRlcmVkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<div class=\"background\">\n    <nav class=\"navbar bg-white small-font\">\n        <a class=\"navbar-brand small-centered\" href=\"#\">\n            <img src=\"../../../assets/images/teikametrics.svg\">\n        </a>\n        <form class=\"form-inline\">\n            <a class=\"word-space extra-top-padding\">SIGN IN</a>\n            <div class=\"input-group\">\n                <input class=\"form-control small-font\" type=\"email\" placeholder=\"Enter your email\"/>\n                <button class=\"input-group-append btn button-color small-font\" type=\"submit\">\n                    Get Started\n                </button>\n            </div>\n        </form>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/inclusions/inclusions.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/inclusions/inclusions.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    margin-top: 50px;\r\n    margin-right: 100px;\r\n    margin-left: 100px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.background span, .background i {\r\n    color: #7B81EA;\r\n    font-weight: bold;\r\n    font-size: smaller;\r\n}\r\n\r\n.background span {\r\n    margin-left: 15px;\r\n}\r\n\r\n.background p {\r\n    font-size: smaller;\r\n    margin-left: 30px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.background h3 {\r\n    font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .background {\r\n        margin: 40px;\r\n    }\r\n    .background .col {\r\n        display: contents;\r\n    }\r\n    .background .row {\r\n        padding: 10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNsdXNpb25zL2luY2x1c2lvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDBDQUEwQztDQUM3Qzs7QUFFRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSTtRQUNJLGFBQWE7S0FDaEI7SUFDRDtRQUNJLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmNsdXNpb25zL2luY2x1c2lvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHNwYW4sIC5iYWNrZ3JvdW5kIGkge1xyXG4gICAgY29sb3I6ICM3QjgxRUE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG4uYmFja2dyb3VuZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5iYWNrZ3JvdW5kIHAge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCBoMyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIG1hcmdpbjogNDBweDtcclxuICAgIH1cclxuICAgIC5iYWNrZ3JvdW5kIC5jb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmQgLnJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/inclusions/inclusions.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/inclusions/inclusions.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n    <h3>Included in all plans</h3>\n  <div class=\"row\">\n      <div class=\"col\">\n          <i class=\"fas fa-tachometer-alt\"></i>\n          <span>Powerful Dashboard</span>\n          <p>\n              All-in-one dashboard with essential key performance metrics and capabilities.\n          </p>\n      </div>\n      <div class=\"col\">\n          <i class=\"fas fa-bullhorn\"></i>\n          <span>Unlimited SP Campaigns</span>\n          <p>No limits or maximums. Run as many Sponsored Products campaigns as you'd like.</p>\n      </div>\n      <div class=\"col\">\n          <i class=\"fas fa-key\"></i>\n          <span>Targeted Keyword Suggestions</span>\n          <p>Easy to execute keyword actions make reducing wasted ad spend and increasing profitability simple.</p>\n      </div>\n      <div class=\"w-100\">\n      </div>\n      <div class=\"col\">\n          <i class=\"fas fa-comments\"></i>\n          <span>Expert Support</span>\n          <p>Never go alone again. Take advantage of online, expert chat with our Customer Success team.</p>\n      </div>\n      <div class=\"col\">\n          <i class=\"fas fa-gavel\"></i>\n          <span>Value-based Bidding</span>\n          <p>With our value-based bidding automation you'll never pay too much (or too little) for a bid again.</p>\n      </div>\n      <div class=\"col\">\n          <i class=\"fas fa-calendar-alt\"></i>\n          <span>Your Data, Your Way</span>\n          <p>Our calendar allows you to see your data in daily, weekly, monthly, yearly, or even custom view.</p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/inclusions/inclusions.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/inclusions/inclusions.component.ts ***!
  \***************************************************************/
/*! exports provided: InclusionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InclusionsComponent", function() { return InclusionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InclusionsComponent = /** @class */ (function () {
    function InclusionsComponent() {
    }
    InclusionsComponent.prototype.ngOnInit = function () {
    };
    InclusionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inclusions',
            template: __webpack_require__(/*! ./inclusions.component.html */ "./src/app/components/inclusions/inclusions.component.html"),
            styles: [__webpack_require__(/*! ./inclusions.component.css */ "./src/app/components/inclusions/inclusions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InclusionsComponent);
    return InclusionsComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-font input, .small-font{\r\n    font-size: small;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: darkgrey;\r\n    font-weight: bold;\r\n}\r\n\r\n.small-font label {\r\n    margin-top: 15px;\r\n    color: black;\r\n}\r\n\r\n.button-color {\r\n    background-color: #7B81EA;\r\n    color: white;\r\n}\r\n\r\n.background {\r\n    background-image: url('dotted-background-left.png'), url('dotted-background-right.png');\r\n    background-position: left top, right top;\r\n    background-repeat: no-repeat, no-repeat;\r\n    background-color: #f3f3f3;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.title-color {\r\n    color: #7B81EA;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n.display-inline {\r\n    display: inline-grid;\r\n}\r\n\r\n.format-strategies {\r\n    width: 50%;\r\n    margin-left: 0px;\r\n    margin-right: 85px;\r\n}\r\n\r\n.pad-top {\r\n    padding-top: 50px;\r\n}\r\n\r\n.webinar-text {\r\n    background-color: #7B81EA;\r\n    color: white;\r\n    border-radius: 15px;\r\n    padding: .375rem .75rem;\r\n    font-weight: bold;\r\n    font-size: smaller;\r\n    width: 120px;\r\n}\r\n\r\n.format-strategies span {\r\n    color: #7B81EA;\r\n    font-weight: bold;\r\n}\r\n\r\n.format-strategies h4 {\r\n    font-weight: lighter;\r\n    font-size: medium;\r\n    margin-top: 25px;\r\n}\r\n\r\n.format-strategies ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.format-strategies li::before {\r\n    content: '• ';\r\n    color: #7B81EA;\r\n}\r\n\r\n.format-strategies li {\r\n    font-size: small;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.format-strategies h1 {\r\n    font-weight: bold;\r\n    margin-right: 15px;\r\n}\r\n\r\n.format-strategies h2 {\r\n    margin-bottom: 10px;\r\n    color: #7B81EA;\r\n    font-size: small;\r\n    font-weight: bold;\r\n    margin-top: 25px;\r\n}\r\n\r\n.format-strategies .date-and-time {\r\n    margin-top: 0px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .display-inline {\r\n        padding-top: 30px;\r\n    }\r\n    .format-strategies {\r\n        width: 100%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksd0ZBQXNJO0lBQ3RJLHlDQUF5QztJQUN6Qyx3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0kscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJO1FBQ0ksa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLG1CQUFtQjtLQUN0QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwtZm9udCBpbnB1dCwgLnNtYWxsLWZvbnR7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNtYWxsLWZvbnQgbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ1dHRvbi1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0I4MUVBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG90dGVkLWJhY2tncm91bmQtbGVmdC5wbmcnKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RvdHRlZC1iYWNrZ3JvdW5kLXJpZ2h0LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3AsIHJpZ2h0IHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1jb2xvciB7XHJcbiAgICBjb2xvcjogIzdCODFFQTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWlubGluZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxufVxyXG5cclxuLmZvcm1hdC1zdHJhdGVnaWVzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4ucGFkLXRvcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLndlYmluYXItdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0I4MUVBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5mb3JtYXQtc3RyYXRlZ2llcyBzcGFuIHtcclxuICAgIGNvbG9yOiAjN0I4MUVBO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtYXQtc3RyYXRlZ2llcyBoNCB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmZvcm1hdC1zdHJhdGVnaWVzIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybWF0LXN0cmF0ZWdpZXMgbGk6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAn4oCiICc7XHJcbiAgICBjb2xvcjogIzdCODFFQTtcclxufVxyXG5cclxuLmZvcm1hdC1zdHJhdGVnaWVzIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtYXQtc3RyYXRlZ2llcyBoMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmZvcm1hdC1zdHJhdGVnaWVzIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzdCODFFQTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtYXQtc3RyYXRlZ2llcyAuZGF0ZS1hbmQtdGltZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5kaXNwbGF5LWlubGluZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybWF0LXN0cmF0ZWdpZXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<div class=\"background\">\n    <div class=\"container\">\n        <div class=\"display-inline format-strategies\">\n            <h6 class=\"webinar-text\">FREE WEBINAR</h6>\n            <h1>7 Simple Strategies to Build Better Sponsored Products Campaigns</h1>\n            <h4>Winning with Sponsored Products starts at the beginning, with well-organized\n                and strategy focused campaign creation.\n            </h4>\n            <h2>You'll learn how to:</h2>\n            <ul>\n                <li>Build and manage profitable campaigns</li>\n                <li>Find profitable keywords you might have missed</li>\n                <li>Increase conversions with Sponsored Products</li>\n                <li>Reduce your overall wasted spend</li>\n            </ul>\n            <h2>Date and time</h2>\n            <h4 class=\"date-and-time\">June 21st 2018, 3PM EST</h4>\n        </div>\n        <div class=\"display-inline pad-top\">\n            <h4 class=\"title-color\">Register</h4>\n            <div class=\"container small-font\">\n                <form #f=\"ngForm\">\n                    <div class=\"form-group\">\n                        <div class=\"form-row\">\n                            <div class=\"col\">\n                                <label for=\"firstName\">First Name</label>\n                                <input id=\"firstName\" class=\"form-control\" type=\"text\" placeholder=\"First name\"/>\n                            </div>\n                            <div class=\"col\">\n                                <label for=\"lastName\">Last Name</label>\n                                <input id=\"lastName\" class=\"form-control\" type=\"text\" placeholder=\"Last Name\"/>\n                            </div>\n                        </div>\n                        <label for=\"companyName\">Company Name*</label>\n                        <input required id=\"companyName\" class=\"form-control\" type=\"text\" placeholder=\"Company Name\"/>\n                        <label for=\"email\">Email*</label>\n                        <input required id=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\"/>\n                        <label for=\"phoneNumber\">Phone Number*</label>\n                        <input required id=\"phoneNumber\" class=\"form-control\" type=\"tel\" placeholder=\"Phone Number\"/>\n                        <label for=\"monthlyAmazonRev\">Monthly Amazon Marketplace Revenue*</label>\n                        <input required id=\"monthlyAmazonRev\" class=\"form-control\" type=\"number\"\n                               placeholder=\"Marketplace Revenue\"/>\n                        <label for=\"spending\">How much are you spending on Amazon Sponsored Products*</label>\n                        <input required id=\"spending\" class=\"form-control\" type=\"text\"\n                               placeholder=\"Spend on Amazon Sponsored Products\"/>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-block button-color\">Register Now</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegistrationComponent.prototype, "registrationForm", void 0);
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/resources.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/resources/resources.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: smaller;\r\n    margin-right: 70px;\r\n    margin-left: 70px;\r\n    margin-top: 100px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.background span {\r\n    font-weight: bold;\r\n    position: relative;\r\n    bottom: 10px;\r\n}\r\n\r\n.background a {\r\n    color: darkgrey;\r\n    font-size: smaller;\r\n}\r\n\r\n.button-color {\r\n    background-color: #7B81EA;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: smaller;\r\n    border-radius: 2px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.background ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.background ul li {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvcmVzb3VyY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtDQUNmOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2VzL3Jlc291cmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQgYSB7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5idXR0b24tY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdCODFFQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHVsIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/resources/resources.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/resources/resources.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"row\">\n      <div class=\"col-lg-2\">\n          <span>Optimize for</span>\n          <ul>\n              <li>\n                  <a>Teikametrics Flywheel</a>\n              </li>\n              <li>\n                  <a>Sponsored Products</a>\n              </li>\n              <li>\n                  <a>FBA Insite</a>\n              </li>\n              <li>\n                  <a>Expert Launch Services</a>\n              </li>\n              <li>\n                  <a>Expert Campaign Launch</a>\n              </li>\n              <li>\n                  <a>SPO Managed Services</a>\n              </li>\n          </ul>\n      </div>\n      <div class=\"col-lg-2\">\n          <span>Sellers</span>\n      </div>\n      <div class=\"col-lg-2\">\n          <span>Agencies</span>\n      </div>\n      <div class=\"col-lg-2\">\n          <span>Company</span>\n          <ul>\n              <li>\n                  <a>Who We Are</a>\n              </li>\n              <li>\n                  <a>Careers</a>\n              </li>\n          </ul>\n      </div>\n      <div class=\"col-lg-2\">\n          <span>Resources</span>\n          <ul>\n              <li>\n                  <a>Blogs</a>\n              </li>\n              <li>\n                  <a>Webinars</a>\n              </li>\n              <li>\n                  <a>Ebooks</a>\n              </li>\n              <li>\n                  <a>TeikaTV</a>\n              </li>\n              <li>\n                  <a>SP Optimizer - Help Center</a>\n              </li>\n              <li>\n                  <a>Insite - Help Center</a>\n              </li>\n          </ul>\n      </div>\n      <div class=\"col-lg-2\">\n          <button class=\"btn button-color\">Get a free demo</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/resources/resources.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/resources/resources.component.ts ***!
  \*************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/components/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.css */ "./src/app/components/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/components/webpage/webpage.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/webpage/webpage.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VicGFnZS93ZWJwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/webpage/webpage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/webpage/webpage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-registration></app-registration>\n<app-free-trial></app-free-trial>\n<app-inclusions></app-inclusions>\n<app-customers></app-customers>\n<app-resources></app-resources>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/webpage/webpage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/webpage/webpage.component.ts ***!
  \*********************************************************/
/*! exports provided: WebpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebpageComponent", function() { return WebpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebpageComponent = /** @class */ (function () {
    function WebpageComponent() {
    }
    WebpageComponent.prototype.ngOnInit = function () {
    };
    WebpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webpage',
            template: __webpack_require__(/*! ./webpage.component.html */ "./src/app/components/webpage/webpage.component.html"),
            styles: [__webpack_require__(/*! ./webpage.component.css */ "./src/app/components/webpage/webpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebpageComponent);
    return WebpageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jenny\OneDrive\GitHub\Teikametrics\Teikametrics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map