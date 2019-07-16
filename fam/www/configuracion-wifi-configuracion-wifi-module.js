(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracion-wifi-configuracion-wifi-module"],{

/***/ "./src/app/configuracion-wifi/configuracion-wifi.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/configuracion-wifi/configuracion-wifi.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfiguracionWifiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionWifiPageModule", function() { return ConfiguracionWifiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracion_wifi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion-wifi.page */ "./src/app/configuracion-wifi/configuracion-wifi.page.ts");







var routes = [
    {
        path: '',
        component: _configuracion_wifi_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionWifiPage"]
    }
];
var ConfiguracionWifiPageModule = /** @class */ (function () {
    function ConfiguracionWifiPageModule() {
    }
    ConfiguracionWifiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_configuracion_wifi_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionWifiPage"]]
        })
    ], ConfiguracionWifiPageModule);
    return ConfiguracionWifiPageModule;
}());



/***/ }),

/***/ "./src/app/configuracion-wifi/configuracion-wifi.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/configuracion-wifi/configuracion-wifi.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons>\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Configuracion Wifi</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button color=\"danger\" (click)=\"logOut()\"> Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/configuracion-wifi/configuracion-wifi.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/configuracion-wifi/configuracion-wifi.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24td2lmaS9jb25maWd1cmFjaW9uLXdpZmkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/configuracion-wifi/configuracion-wifi.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/configuracion-wifi/configuracion-wifi.page.ts ***!
  \***************************************************************/
/*! exports provided: ConfiguracionWifiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionWifiPage", function() { return ConfiguracionWifiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfiguracionWifiPage = /** @class */ (function () {
    function ConfiguracionWifiPage() {
    }
    ConfiguracionWifiPage.prototype.ngOnInit = function () {
    };
    ConfiguracionWifiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracion-wifi',
            template: __webpack_require__(/*! ./configuracion-wifi.page.html */ "./src/app/configuracion-wifi/configuracion-wifi.page.html"),
            styles: [__webpack_require__(/*! ./configuracion-wifi.page.scss */ "./src/app/configuracion-wifi/configuracion-wifi.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfiguracionWifiPage);
    return ConfiguracionWifiPage;
}());



/***/ })

}]);
//# sourceMappingURL=configuracion-wifi-configuracion-wifi-module.js.map