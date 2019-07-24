(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracion-usuario-configuracion-usuario-module"],{

/***/ "./src/app/configuracion-usuario/configuracion-usuario.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/configuracion-usuario/configuracion-usuario.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConfiguracionUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionUsuarioPageModule", function() { return ConfiguracionUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracion_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion-usuario.page */ "./src/app/configuracion-usuario/configuracion-usuario.page.ts");







var routes = [
    {
        path: '',
        component: _configuracion_usuario_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionUsuarioPage"]
    }
];
var ConfiguracionUsuarioPageModule = /** @class */ (function () {
    function ConfiguracionUsuarioPageModule() {
    }
    ConfiguracionUsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_configuracion_usuario_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionUsuarioPage"]]
        })
    ], ConfiguracionUsuarioPageModule);
    return ConfiguracionUsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/configuracion-usuario/configuracion-usuario.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/configuracion-usuario/configuracion-usuario.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons>\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Configuacion Usuario</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button color=\"danger\" (click)=\"logOut()\"> Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n</ion-header>\n\n<ion-content padding class=\"home\">\n \n  <ion-list>\n    <ion-item color=\"textareaColor\">\n      <ion-label floating >Cambiar Contrasena</ion-label>\n      <ion-input type=\"text\" value=\"\" ></ion-input>\n    </ion-item>\n\n    <ion-item no-lines   color=\"textareaColor\">\n      <button ion-button round full type=\"submit\">Guardar</button>\n    </ion-item>\n\n    <ion-item  color=\"textareaColor\">\n      <ion-label floating>Cambiar Correo</ion-label>\n      <ion-input type=\"password\"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines  color=\"textareaColor\">\n      <button ion-button round full type=\"submit\">Guardar</button>\n    </ion-item>\n\n    <ion-item color=\"textareaColor\">\n      <ion-label floating>Cambiar Telefono</ion-label>\n      <ion-input type=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item color=\"textareaColor\">\n      <button ion-button round full type=\"submit\">Guardar</button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/configuracion-usuario/configuracion-usuario.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/configuracion-usuario/configuracion-usuario.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24tdXN1YXJpby9jb25maWd1cmFjaW9uLXVzdWFyaW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/configuracion-usuario/configuracion-usuario.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/configuracion-usuario/configuracion-usuario.page.ts ***!
  \*********************************************************************/
/*! exports provided: ConfiguracionUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionUsuarioPage", function() { return ConfiguracionUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_authservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/authservice.service */ "./src/app/providers/authservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/data/data */ "./src/app/providers/data/data.ts");






var ConfiguracionUsuarioPage = /** @class */ (function () {
    function ConfiguracionUsuarioPage(httpClient, dataProvider, authService, router) {
        this.httpClient = httpClient;
        this.dataProvider = dataProvider;
        this.authService = authService;
        this.router = router;
    }
    ConfiguracionUsuarioPage.prototype.logOut = function () {
        this.authService.logOut();
        this.router.navigate(['/home']);
    };
    ConfiguracionUsuarioPage.prototype.ngOnInit = function () { };
    ConfiguracionUsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracion-usuario',
            template: __webpack_require__(/*! ./configuracion-usuario.page.html */ "./src/app/configuracion-usuario/configuracion-usuario.page.html"),
            styles: [__webpack_require__(/*! ./configuracion-usuario.page.scss */ "./src/app/configuracion-usuario/configuracion-usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _providers_data_data__WEBPACK_IMPORTED_MODULE_5__["DataProvider"], _providers_authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ConfiguracionUsuarioPage);
    return ConfiguracionUsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=configuracion-usuario-configuracion-usuario-module.js.map