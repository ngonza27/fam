(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seguridad-seguridad-module"],{

/***/ "./src/app/seguridad/seguridad.module.ts":
/*!***********************************************!*\
  !*** ./src/app/seguridad/seguridad.module.ts ***!
  \***********************************************/
/*! exports provided: SeguridadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadPageModule", function() { return SeguridadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seguridad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seguridad.page */ "./src/app/seguridad/seguridad.page.ts");







var routes = [
    {
        path: '',
        component: _seguridad_page__WEBPACK_IMPORTED_MODULE_6__["SeguridadPage"]
    }
];
var SeguridadPageModule = /** @class */ (function () {
    function SeguridadPageModule() {
    }
    SeguridadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_seguridad_page__WEBPACK_IMPORTED_MODULE_6__["SeguridadPage"]]
        })
    ], SeguridadPageModule);
    return SeguridadPageModule;
}());



/***/ }),

/***/ "./src/app/seguridad/seguridad.page.html":
/*!***********************************************!*\
  !*** ./src/app/seguridad/seguridad.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the SecurityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons>\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Seguridad</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button color=\"danger\" (click)=\"logOut()\"> Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n</ion-header>\n\n\n<ion-content padding class=\"home\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <svg id='b' width=\"50\" height=\"50\">\n          <circle cx=\"25\" cy=\"25\" r=\"22\" fill=\"red\" stroke=\"white\" stroke-width=\"2\"/>\n        </svg>\n        <button id=\"a0\" ion-button block (click)=\"activarSeguridad()\">Activar Seguridad</button>\n        <button id=\"a1\"ion-button block (click)=\"desactivarSeguridad()\">Desactivar Seguridad</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/seguridad/seguridad.page.scss":
/*!***********************************************!*\
  !*** ./src/app/seguridad/seguridad.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZ3VyaWRhZC9zZWd1cmlkYWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/seguridad/seguridad.page.ts":
/*!*********************************************!*\
  !*** ./src/app/seguridad/seguridad.page.ts ***!
  \*********************************************/
/*! exports provided: SeguridadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadPage", function() { return SeguridadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/authservice.service */ "./src/app/providers/authservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SeguridadPage = /** @class */ (function () {
    function SeguridadPage(router, authService, httpClient) {
        this.router = router;
        this.authService = authService;
        this.httpClient = httpClient;
    }
    SeguridadPage.prototype.activarSeguridad = function () {
        this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata', '{"seguridad":"activar"}').subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
    };
    SeguridadPage.prototype.desactivarSeguridad = function () {
        this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata', '{"seguridad":"desactivar"}').subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
    };
    SeguridadPage.prototype.logOut = function () {
        //this.authService.logOut();
        this.router.navigate(['/home']);
    };
    SeguridadPage.prototype.ngOnInit = function () {
    };
    SeguridadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seguridad',
            template: __webpack_require__(/*! ./seguridad.page.html */ "./src/app/seguridad/seguridad.page.html"),
            styles: [__webpack_require__(/*! ./seguridad.page.scss */ "./src/app/seguridad/seguridad.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _providers_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SeguridadPage);
    return SeguridadPage;
}());



/***/ })

}]);
//# sourceMappingURL=seguridad-seguridad-module.js.map