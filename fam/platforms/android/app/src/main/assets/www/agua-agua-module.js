(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agua-agua-module"],{

/***/ "./src/app/agua/agua.module.ts":
/*!*************************************!*\
  !*** ./src/app/agua/agua.module.ts ***!
  \*************************************/
/*! exports provided: AguaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AguaPageModule", function() { return AguaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/fesm5/ngx-gauge.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agua_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agua.page */ "./src/app/agua/agua.page.ts");









var routes = [
    {
        path: '',
        component: _agua_page__WEBPACK_IMPORTED_MODULE_8__["AguaPage"]
    }
];
var AguaPageModule = /** @class */ (function () {
    function AguaPageModule() {
    }
    AguaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_gauge__WEBPACK_IMPORTED_MODULE_6__["NgxGaugeModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"]
            ],
            declarations: [_agua_page__WEBPACK_IMPORTED_MODULE_8__["AguaPage"]]
        })
    ], AguaPageModule);
    return AguaPageModule;
}());



/***/ }),

/***/ "./src/app/agua/agua.page.html":
/*!*************************************!*\
  !*** ./src/app/agua/agua.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-buttons>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Agua</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button color=\"danger\" (click)=\"logOut()\"> Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n</ion-header>\n  \n  \n  <ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ngx-gauge  style=\"color: #78cffd\" type={{gaugeType}} value={{gaugeValue}} label={{gaugeLabel1}} thick={{thickValue}} size={{gaugeSize}}></ngx-gauge>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-label style=\"color: #78cffd; font-size: 25px\">Progreso a la meta</ion-label>\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%; background-color:#78cffd; font-size: 15px\">50%</div>\n  </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/agua/agua.page.scss":
/*!*************************************!*\
  !*** ./src/app/agua/agua.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-agua .progress {\n  height: 23px; }\n\npage-agua .progress {\n  width: 325px; }\n\npage-agua .progress {\n  margin-left: auto;\n  margin-right: auto; }\n\n.home {\n  background-color: #222;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlZGVyaWNvL0RvY3VtZW50cy9mYW0vZmFtL3NyYy9hcHAvYWd1YS9hZ3VhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNlLFlBQVksRUFBQTs7QUFEM0I7RUFFZSxZQUFZLEVBQUE7O0FBRjNCO0VBR2dCLGlCQUFpQjtFQUFFLGtCQUFpQixFQUFBOztBQUlwRDtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FndWEvYWd1YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWFndWF7XG4gICAgLnByb2dyZXNzIHtoZWlnaHQ6IDIzcHg7fVxuICAgIC5wcm9ncmVzcyB7d2lkdGg6IDMyNXB4O31cbiAgICAucHJvZ3Jlc3MgeyBtYXJnaW4tbGVmdDogYXV0bzsgbWFyZ2luLXJpZ2h0OmF1dG87IH1cbiAgfVxuICBcblxuLmhvbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/agua/agua.page.ts":
/*!***********************************!*\
  !*** ./src/app/agua/agua.page.ts ***!
  \***********************************/
/*! exports provided: AguaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AguaPage", function() { return AguaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AguaPage = /** @class */ (function () {
    function AguaPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.gaugeType = "semi";
        this.gaugeValue = 5;
        this.gaugeLabel1 = "Consumo Agua Actual";
        this.gaugeAppendText = "L/hr";
        this.thickValue = 15;
        this.gaugeSize = 350;
    }
    AguaPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    AguaPage.prototype.ngOnInit = function () {
    };
    AguaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agua',
            template: __webpack_require__(/*! ./agua.page.html */ "./src/app/agua/agua.page.html"),
            styles: [__webpack_require__(/*! ./agua.page.scss */ "./src/app/agua/agua.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], AguaPage);
    return AguaPage;
}());



/***/ })

}]);
//# sourceMappingURL=agua-agua-module.js.map