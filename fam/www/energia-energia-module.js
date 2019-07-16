(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["energia-energia-module"],{

/***/ "./src/app/energia/energia.module.ts":
/*!*******************************************!*\
  !*** ./src/app/energia/energia.module.ts ***!
  \*******************************************/
/*! exports provided: EnergiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergiaPageModule", function() { return EnergiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _energia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./energia.page */ "./src/app/energia/energia.page.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/fesm5/ngx-gauge.js");









var routes = [
    {
        path: '',
        component: _energia_page__WEBPACK_IMPORTED_MODULE_6__["EnergiaPage"]
    }
];
var EnergiaPageModule = /** @class */ (function () {
    function EnergiaPageModule() {
    }
    EnergiaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_gauge__WEBPACK_IMPORTED_MODULE_8__["NgxGaugeModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"]
            ],
            declarations: [_energia_page__WEBPACK_IMPORTED_MODULE_6__["EnergiaPage"]]
        })
    ], EnergiaPageModule);
    return EnergiaPageModule;
}());



/***/ }),

/***/ "./src/app/energia/energia.page.html":
/*!*******************************************!*\
  !*** ./src/app/energia/energia.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the EnergyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons>\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Energia</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button color=\"danger\" (click)=\"logOut()\"> Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n</ion-header>\n\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ngx-gauge  style=\"color: #78cffd\" type={{gaugeType}} value={{gaugeValue}} label={{gaugeLabel1}} thick={{thickValue}} size={{gaugeSize}}></ngx-gauge>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-label style=\"color: #78cffd; font-size: 25px\">Progreso a la meta</ion-label>\n<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%; background-color:#78cffd; font-size: 15px\">50%</div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/energia/energia.page.scss":
/*!*******************************************!*\
  !*** ./src/app/energia/energia.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZXJnaWEvZW5lcmdpYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/energia/energia.page.ts":
/*!*****************************************!*\
  !*** ./src/app/energia/energia.page.ts ***!
  \*****************************************/
/*! exports provided: EnergiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergiaPage", function() { return EnergiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EnergiaPage = /** @class */ (function () {
    function EnergiaPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.gaugeType = "semi";
        this.gaugeValue = 28.9;
        this.gaugeLabel1 = "Consumo Energia Actual";
        this.gaugeAppendText = "kW/hr";
        this.thickValue = 15;
        this.gaugeSize = 350;
    }
    EnergiaPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    EnergiaPage.prototype.ngOnInit = function () {
    };
    EnergiaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-energia',
            template: __webpack_require__(/*! ./energia.page.html */ "./src/app/energia/energia.page.html"),
            styles: [__webpack_require__(/*! ./energia.page.scss */ "./src/app/energia/energia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], EnergiaPage);
    return EnergiaPage;
}());



/***/ })

}]);
//# sourceMappingURL=energia-energia-module.js.map