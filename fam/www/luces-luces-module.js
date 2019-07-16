(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["luces-luces-module"],{

/***/ "./src/app/luces/luces.module.ts":
/*!***************************************!*\
  !*** ./src/app/luces/luces.module.ts ***!
  \***************************************/
/*! exports provided: LucesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LucesPageModule", function() { return LucesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _luces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./luces.page */ "./src/app/luces/luces.page.ts");







var routes = [
    {
        path: '',
        component: _luces_page__WEBPACK_IMPORTED_MODULE_6__["LucesPage"]
    }
];
var LucesPageModule = /** @class */ (function () {
    function LucesPageModule() {
    }
    LucesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_luces_page__WEBPACK_IMPORTED_MODULE_6__["LucesPage"]]
        })
    ], LucesPageModule);
    return LucesPageModule;
}());



/***/ }),

/***/ "./src/app/luces/luces.page.html":
/*!***************************************!*\
  !*** ./src/app/luces/luces.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Luces</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" (click)=\"logOut()\" routerLink=\"/home\" routerDirection=\"forward\"> Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n</ion-header>\n\n<ion-content padding class=\"home\">\n  <ion-list>\n      <ion-item no-lines  color=\"textareaColor\">\n        <ion-button  round full type=\"submit\" (click)=\"prender()\">prender</ion-button>\n      </ion-item>\n      <ion-item no-lines  color=\"textareaColor\">\n        <ion-button  round full type=\"submit\" (click)=\"apagar()\">apagar</ion-button>\n      </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/luces/luces.page.scss":
/*!***************************************!*\
  !*** ./src/app/luces/luces.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1Y2VzL2x1Y2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/luces/luces.page.ts":
/*!*************************************!*\
  !*** ./src/app/luces/luces.page.ts ***!
  \*************************************/
/*! exports provided: LucesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LucesPage", function() { return LucesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/data/data */ "./src/app/providers/data/data.ts");
/* harmony import */ var _providers_authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/authservice.service */ "./src/app/providers/authservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LucesPage = /** @class */ (function () {
    function LucesPage(router, httpClient, dataService, authService) {
        this.router = router;
        this.httpClient = httpClient;
        this.dataService = dataService;
        this.authService = authService;
    }
    LucesPage.prototype.prender = function () {
        this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata', '{"userId":"tob447","deviceName":"holp","luz":{"lightOn":"1"}}').subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
    };
    LucesPage.prototype.apagar = function () {
        this.httpClient.post('https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata', '{"userId":"tob447","deviceName":"holp","luz":{"lightOn":"0"}}').subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
    };
    LucesPage.prototype.logOut = function () {
        //this.authService.logOut();
        this.router.navigate(['/home']);
    };
    LucesPage.prototype.ngOnInit = function () {
    };
    LucesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-luces',
            template: __webpack_require__(/*! ./luces.page.html */ "./src/app/luces/luces.page.html"),
            styles: [__webpack_require__(/*! ./luces.page.scss */ "./src/app/luces/luces.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _providers_data_data__WEBPACK_IMPORTED_MODULE_3__["DataProvider"], _providers_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"]])
    ], LucesPage);
    return LucesPage;
}());



/***/ })

}]);
//# sourceMappingURL=luces-luces-module.js.map