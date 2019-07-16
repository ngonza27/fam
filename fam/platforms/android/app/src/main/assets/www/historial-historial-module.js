(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-historial-module"],{

/***/ "./src/app/historial/data.ts":
/*!***********************************!*\
  !*** ./src/app/historial/data.ts ***!
  \***********************************/
/*! exports provided: single, multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
var single = [
    {
        "name": "Electricidad",
        "value": 894
    },
    {
        "name": "Agua",
        "value": 500
    },
];
var multi = [
    {},
    {}
];


/***/ }),

/***/ "./src/app/historial/historial.module.ts":
/*!***********************************************!*\
  !*** ./src/app/historial/historial.module.ts ***!
  \***********************************************/
/*! exports provided: HistorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function() { return HistorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./historial.page */ "./src/app/historial/historial.page.ts");








var routes = [
    {
        path: '',
        component: _historial_page__WEBPACK_IMPORTED_MODULE_7__["HistorialPage"]
    }
];
var HistorialPageModule = /** @class */ (function () {
    function HistorialPageModule() {
    }
    HistorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_historial_page__WEBPACK_IMPORTED_MODULE_7__["HistorialPage"]]
        })
    ], HistorialPageModule);
    return HistorialPageModule;
}());



/***/ }),

/***/ "./src/app/historial/historial.page.html":
/*!***********************************************!*\
  !*** ./src/app/historial/historial.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons>\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Seguridad</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button color=\"danger\" (click)=\"logOut()\"> Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n</ion-header>\n\n<ion-content class=\"home\">\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-item>\n              <ion-label>Seleccione el Sensor</ion-label>\n              <ion-select [(ngModel)]=\"Sensor\">\n                <ion-select-option value=\"energia\">Energia</ion-select-option>\n                <ion-select-option value=\"agua\">Agua</ion-select-option>\n              </ion-select>\n            </ion-item>\n          <br>\n            <ngx-charts-bar-vertical\n            [view]=\"view\"\n            [scheme]=\"colorScheme\"\n            [results]=\"single\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            (select)=\"onSelect($event)\">\n          </ngx-charts-bar-vertical>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/historial/historial.page.scss":
/*!***********************************************!*\
  !*** ./src/app/historial/historial.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcmlhbC9oaXN0b3JpYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/historial/historial.page.ts":
/*!*********************************************!*\
  !*** ./src/app/historial/historial.page.ts ***!
  \*********************************************/
/*! exports provided: HistorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPage", function() { return HistorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_authservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/authservice.service */ "./src/app/providers/authservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/app/historial/data.ts");






var HistorialPage = /** @class */ (function () {
    function HistorialPage(httClient, authService, router) {
        this.httClient = httClient;
        this.authService = authService;
        this.router = router;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Servicio';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Cantidad';
        this.colorScheme = {
            domain: ['#3D5AFE', '#78cffd']
        };
        Object.assign(this, { single: _data__WEBPACK_IMPORTED_MODULE_5__["single"] });
    }
    HistorialPage.prototype.onSelect = function (event) { console.log(event); };
    HistorialPage.prototype.historial = function () { };
    //no funciona para todos los casos onResize(event) { this.vista = [event.target.innerWidth - 150, 280 ]; }
    HistorialPage.prototype.logOut = function () {
        this.authService.logOut();
        this.router.navigate(['/home']);
    };
    HistorialPage.prototype.ngOnInit = function () { };
    HistorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-historial',
            template: __webpack_require__(/*! ./historial.page.html */ "./src/app/historial/historial.page.html"),
            styles: [__webpack_require__(/*! ./historial.page.scss */ "./src/app/historial/historial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _providers_authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HistorialPage);
    return HistorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=historial-historial-module.js.map