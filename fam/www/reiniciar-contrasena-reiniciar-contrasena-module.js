(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reiniciar-contrasena-reiniciar-contrasena-module"],{

/***/ "./src/app/reiniciar-contrasena/reiniciar-contrasena.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/reiniciar-contrasena/reiniciar-contrasena.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReiniciarContrasenaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReiniciarContrasenaPageModule", function() { return ReiniciarContrasenaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reiniciar_contrasena_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reiniciar-contrasena.page */ "./src/app/reiniciar-contrasena/reiniciar-contrasena.page.ts");







var routes = [
    {
        path: '',
        component: _reiniciar_contrasena_page__WEBPACK_IMPORTED_MODULE_6__["ReiniciarContrasenaPage"]
    }
];
var ReiniciarContrasenaPageModule = /** @class */ (function () {
    function ReiniciarContrasenaPageModule() {
    }
    ReiniciarContrasenaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reiniciar_contrasena_page__WEBPACK_IMPORTED_MODULE_6__["ReiniciarContrasenaPage"]]
        })
    ], ReiniciarContrasenaPageModule);
    return ReiniciarContrasenaPageModule;
}());



/***/ }),

/***/ "./src/app/reiniciar-contrasena/reiniciar-contrasena.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/reiniciar-contrasena/reiniciar-contrasena.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>reiniciar_contrasena</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label floating>Code</ion-label>\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" novalidate class=\"home\">\n      <ion-list>\n  \n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type=\"text\" value=\"\" name=\"username\" ngModel ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button type=\"submit\">Enviar Codigo al Correo</button>\n        </ion-item>\n\n        <ion-item *ngIf=\"buttonClicked\">\n          <ion-label floating>Code</ion-label>\n          <ion-input type=\"text\" value=\"\" name=\"code\" ngModel ></ion-input>\n        </ion-item>\n        <ion-item>\n            <button ion-button type=\"submit\">{{textoBoton}}</button>\n          </ion-item>\n  \n      \n      </ion-list>\n    </form>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/reiniciar-contrasena/reiniciar-contrasena.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/reiniciar-contrasena/reiniciar-contrasena.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlaW5pY2lhci1jb250cmFzZW5hL3JlaW5pY2lhci1jb250cmFzZW5hLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reiniciar-contrasena/reiniciar-contrasena.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/reiniciar-contrasena/reiniciar-contrasena.page.ts ***!
  \*******************************************************************/
/*! exports provided: ReiniciarContrasenaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReiniciarContrasenaPage", function() { return ReiniciarContrasenaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/authservice.service */ "./src/app/providers/authservice.service.ts");



var ReiniciarContrasenaPage = /** @class */ (function () {
    function ReiniciarContrasenaPage(authService) {
        this.authService = authService;
        this.buttonClicked = false;
    }
    ReiniciarContrasenaPage.prototype.onSubmit = function (form) {
        var usrName = form.value.username;
        var code = form.value.password;
        this.authService.forgotPassword(usrName);
        this.buttonClicked = true;
    };
    ReiniciarContrasenaPage.prototype.ngOnInit = function () {
    };
    ReiniciarContrasenaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reiniciar-contrasena',
            template: __webpack_require__(/*! ./reiniciar-contrasena.page.html */ "./src/app/reiniciar-contrasena/reiniciar-contrasena.page.html"),
            styles: [__webpack_require__(/*! ./reiniciar-contrasena.page.scss */ "./src/app/reiniciar-contrasena/reiniciar-contrasena.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"]])
    ], ReiniciarContrasenaPage);
    return ReiniciarContrasenaPage;
}());



/***/ })

}]);
//# sourceMappingURL=reiniciar-contrasena-reiniciar-contrasena-module.js.map