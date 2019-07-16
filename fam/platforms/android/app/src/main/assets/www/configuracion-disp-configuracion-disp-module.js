(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracion-disp-configuracion-disp-module"],{

/***/ "./src/app/configuracion-disp/configuracion-disp.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/configuracion-disp/configuracion-disp.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfiguracionDispPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionDispPageModule", function() { return ConfiguracionDispPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracion_disp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion-disp.page */ "./src/app/configuracion-disp/configuracion-disp.page.ts");







var routes = [
    {
        path: '',
        component: _configuracion_disp_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionDispPage"]
    }
];
var ConfiguracionDispPageModule = /** @class */ (function () {
    function ConfiguracionDispPageModule() {
    }
    ConfiguracionDispPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_configuracion_disp_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionDispPage"]]
        })
    ], ConfiguracionDispPageModule);
    return ConfiguracionDispPageModule;
}());



/***/ }),

/***/ "./src/app/configuracion-disp/configuracion-disp.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/configuracion-disp/configuracion-disp.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons>\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Configuracion Dispositivo</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button color=\"danger\" (click)=\"logOut()\"> Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n</ion-header>\n\n<ion-content padding class=\"home\">\n  <ion-list>\n      <ion-item>\n          <ion-label>Selecciona que Dispositivo desea Registrar</ion-label>\n          <ion-select [(ngModel)]=\"tipo\">\n            <ion-select-option value=\"0\">Sensor de Agua</ion-select-option>\n            <ion-select-option value=\"1\">Sensor de Energia</ion-select-option>\n            <ion-select-option value=\"2\">Dispositivo de Seguridad</ion-select-option>\n            <ion-select-option value=\"3\">Luces</ion-select-option>\n            <ion-select-option value=\"4\">Otro Tipo de Sensores</ion-select-option>\n          </ion-select>\n        </ion-item>\n    <ion-item color=\"textareaColor\">\n      <ion-label floating>Id Dispositivo</ion-label>\n      <ion-input floating type=\"text\" value=\"\" [(ngModel)]=\"idDispositivo\"></ion-input>\n    </ion-item>\n\n      <ion-item color=\"textareaColor\" *ngIf=\"tipo==2||tipo==3|| tipo==4\">\n        <ion-label floating>Nombre Dispositivo</ion-label>\n        <ion-input flaoting type=\"text\" value=\"\" [(ngModel)]=\"nombreDispositivo\"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines  color=\"textareaColor\">\n        <button ion-button  round full type=\"submit\" (click)=\"registrarDisp()\">Guardar</button>\n      </ion-item>\n\n      <ion-item color=\"textareaColor\">\n        <ion-label floating>Eliminar Dispositivo</ion-label>\n        <ion-input floating type=\"text\" value=\"\" [(ngModel)]=\"idBorrar\"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines  color=\"textareaColor\">\n        <button ion-button round full type=\"submit\" (click)=\"eliminarDispositivo()\">Guardar</button>\n      </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/configuracion-disp/configuracion-disp.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/configuracion-disp/configuracion-disp.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24tZGlzcC9jb25maWd1cmFjaW9uLWRpc3AucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/configuracion-disp/configuracion-disp.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/configuracion-disp/configuracion-disp.page.ts ***!
  \***************************************************************/
/*! exports provided: ConfiguracionDispPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionDispPage", function() { return ConfiguracionDispPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/data/data */ "./src/app/providers/data/data.ts");
/* harmony import */ var _providers_authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/authservice.service */ "./src/app/providers/authservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ConfiguracionDispPage = /** @class */ (function () {
    function ConfiguracionDispPage(router, httpClient, dataService, authService) {
        this.router = router;
        this.httpClient = httpClient;
        this.dataService = dataService;
        this.authService = authService;
        this.idDispositivo = "";
        this.nombreDispositivo = "";
        this.idBorrar = "";
        this.tipo = 1;
    }
    ConfiguracionDispPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguraciondispPage');
    };
    ConfiguracionDispPage.prototype.eliminarDispositivo = function () {
        var saveDevice = { "userId": this.authService.getAuthenticatedUser()['username'],
            "dDevice": this.idBorrar };
        this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo', saveDevice).subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
    };
    ConfiguracionDispPage.prototype.registrarDisp = function () {
        var nombreDis = this.nombreDispositivo;
        var id = this.idDispositivo;
        // 0= agua ,1=energia, 2=dispositivos de seguridad, 3= luces, 4= otros sensores
        if (this.tipo == 0) {
            console.log("agregandoDispositivo");
            var saveDevice = { "userId": this.authService.getAuthenticatedUser()['username'],
                "rDevice": {
                    idDispositivo: id,
                    nombreDispositivo: "waterSensor",
                    "Tipo": this.tipo
                } };
            console.log(saveDevice);
            this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo', saveDevice).subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
        }
        if (this.tipo == 1) {
            var saveDevice = { "userId": this.authService.getAuthenticatedUser()['username'],
                "rDevice": {
                    idDispositivo: id,
                    nombreDispositivo: "energySensor",
                    "Tipo": this.tipo
                } };
            console.log(saveDevice);
            this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo', saveDevice).subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
        }
        if (this.tipo == 2 || this.tipo == 3 || this.tipo == 4) {
            var saveDevice = { "userId": this.authService.getAuthenticatedUser()['username'],
                "rDevice": {
                    idDispositivo: id,
                    nombreDispositivo: this.nombreDispositivo,
                    "Tipo": this.tipo
                } };
            console.log(saveDevice);
            this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/saveuserinfo', saveDevice).subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
        }
    };
    ConfiguracionDispPage.prototype.logOut = function () {
        //this.authService.logOut();
        this.router.navigate(['/home']);
    };
    ConfiguracionDispPage.prototype.ngOnInit = function () { };
    ConfiguracionDispPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracion-disp',
            template: __webpack_require__(/*! ./configuracion-disp.page.html */ "./src/app/configuracion-disp/configuracion-disp.page.html"),
            styles: [__webpack_require__(/*! ./configuracion-disp.page.scss */ "./src/app/configuracion-disp/configuracion-disp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _providers_data_data__WEBPACK_IMPORTED_MODULE_3__["DataProvider"], _providers_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"]])
    ], ConfiguracionDispPage);
    return ConfiguracionDispPage;
}());



/***/ })

}]);
//# sourceMappingURL=configuracion-disp-configuracion-disp-module.js.map