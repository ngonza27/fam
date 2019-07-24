(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otros-otros-module"],{

/***/ "./src/app/otros/otros.module.ts":
/*!***************************************!*\
  !*** ./src/app/otros/otros.module.ts ***!
  \***************************************/
/*! exports provided: OtrosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtrosPageModule", function() { return OtrosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otros.page */ "./src/app/otros/otros.page.ts");







var routes = [
    {
        path: '',
        component: _otros_page__WEBPACK_IMPORTED_MODULE_6__["OtrosPage"]
    }
];
var OtrosPageModule = /** @class */ (function () {
    function OtrosPageModule() {
    }
    OtrosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_otros_page__WEBPACK_IMPORTED_MODULE_6__["OtrosPage"]]
        })
    ], OtrosPageModule);
    return OtrosPageModule;
}());



/***/ }),

/***/ "./src/app/otros/otros.page.html":
/*!***************************************!*\
  !*** ./src/app/otros/otros.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color='primary'>\n        <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      <ion-title>Otros</ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-button color=\"danger\" (click)=\"logOut()\"> Logout</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n  </ion-header>\n  \n  <ion-content>\n      <ion-list>\n          <ion-item>\n              <ion-label>Selecciona que Dispositivo desea Registrar</ion-label>\n              <ion-select [(ngModel)]=\"tipo\">\n                <ion-select-option *ngFor=\" let device of devices\" value=\"{{device}}\">{{device}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n      </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/otros/otros.page.scss":
/*!***************************************!*\
  !*** ./src/app/otros/otros.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290cm9zL290cm9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/otros/otros.page.ts":
/*!*************************************!*\
  !*** ./src/app/otros/otros.page.ts ***!
  \*************************************/
/*! exports provided: OtrosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtrosPage", function() { return OtrosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/data/data */ "./src/app/providers/data/data.ts");
/* harmony import */ var _providers_authservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/authservice.service */ "./src/app/providers/authservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var OtrosPage = /** @class */ (function () {
    function OtrosPage(dataService, authService, router) {
        this.dataService = dataService;
        this.authService = authService;
        this.router = router;
        //this.dataService.returnUserInfo();
        //this.devices=Object.keys(this.dataService.userInfo['otros']);   
        //console.log(this.devices);
    }
    /*
    ionViewDidLoad() {
      this.dataService.returnUserInfo();
      this.devices=Object.keys(this.dataService.userInfo['otros']);
      console.log(this.devices);
    }*/
    OtrosPage.prototype.logOut = function () {
        this.authService.logOut();
        this.router.navigate(['/home']);
    };
    OtrosPage.prototype.ngOnInit = function () { };
    OtrosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otros',
            template: __webpack_require__(/*! ./otros.page.html */ "./src/app/otros/otros.page.html"),
            styles: [__webpack_require__(/*! ./otros.page.scss */ "./src/app/otros/otros.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_data_data__WEBPACK_IMPORTED_MODULE_2__["DataProvider"], _providers_authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OtrosPage);
    return OtrosPage;
}());



/***/ })

}]);
//# sourceMappingURL=otros-otros-module.js.map