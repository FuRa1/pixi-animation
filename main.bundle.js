webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"page\">\r\n  <h3>\r\n    Portal animation\r\n  </h3>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  height: 100vh;\n  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; }\n\n.page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  height: 100%;\n  text-align: center; }\n\n.page canvas {\n    display: inline-block; }\n\n.page h3 {\n    margin-bottom: 10px;\n    font-size: 24px;\n    text-transform: uppercase;\n    color: #436f70; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__green_light_green_light_module__ = __webpack_require__("../../../../../src/app/green-light/green-light.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* AppRoutes */],
                __WEBPACK_IMPORTED_MODULE_3__green_light_green_light_module__["a" /* GreenLightModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");

var appRoutes = [
    { path: '', redirectTo: '/green-light', pathMatch: 'full' },
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false });


/***/ }),

/***/ "../../../../../src/app/green-light/green-light.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- canvas renderer here -->\r\n<div class=\"green-light\">\r\n  <form [formGroup]=\"animationControls\">\r\n    <input type=\"checkbox\" formControlName=\"isOnPause\" id=\"isOnPause\"/>\r\n    <label for=\"isOnPause\" class=\"button pause\">\r\n      Start/Stop\r\n    </label>\r\n    <input type=\"checkbox\" formControlName=\"isForward\" id=\"isForward\"/>\r\n    <label class=\"button direction\" for=\"isForward\">\r\n      Direction\r\n    </label>\r\n    <label class=\"button\" (click)=\"restart()\">Restart</label>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/green-light/green-light.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".green-light {\n  text-align: center; }\n  .green-light .button {\n    display: inline-block;\n    border-radius: 3px;\n    padding: 5px 7px;\n    margin: 10px;\n    background-color: cadetblue;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: white;\n    cursor: pointer;\n    -webkit-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out; }\n  .green-light .button:hover, .green-light .button:focus {\n      background-color: #4c7e80; }\n  .green-light input[type=checkbox] {\n    visibility: hidden;\n    position: absolute; }\n  .green-light input[type=checkbox]:checked + label {\n      background-color: #a54936; }\n  .green-light input[type=checkbox]:checked + label:hover, .green-light input[type=checkbox]:checked + label:focus {\n        background-color: #7f3829; }\n  .green-light .speed input {\n    display: inline-block;\n    margin-left: 5px;\n    border: none;\n    border-radius: 3px;\n    padding: 0 7px;\n    width: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/green-light/green-light.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js__ = __webpack_require__("../../../../pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__green_light_service__ = __webpack_require__("../../../../../src/app/green-light/green-light.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GreenLightComponent = /** @class */ (function () {
    function GreenLightComponent(renderer, el, greenLightService, fb) {
        this.renderer = renderer;
        this.el = el;
        this.greenLightService = greenLightService;
        this.fb = fb;
        this.lightApp = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Application"](144, 365); // ini PIXI app
        this.alive = true; // is animation alive
        this.frameIndex = 0; // start index;
        this.totalFrames = 72; // total amount of frame && end index;
        // controls
        this.isForward = true;
        this.renderer.appendChild(this.el.nativeElement, this.lightApp.view); // append canvas (PIXI app) in component template
        this.textures = this.greenLightService.resourcesArray(this.totalFrames, 'assets/partials/image_part_'); // create array of resources
    }
    GreenLightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.waterfall = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Sprite"](this.textures[this.frameIndex]); // init PIXI.Sprite el
        this.lightApp.stage.addChild(this.waterfall); // append PIXI.Sprite into PIXI.Application
        this.initControls(); // ini reactive controls
        this.ticker = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["ticker"].Ticker(); // create new Ticker
        this.ticker.add(function (frameTime) {
            _this.calcNextIndex();
            _this.waterfall.texture = _this.textures[_this.frameIndex];
        });
        this.ticker.start();
    };
    GreenLightComponent.prototype.calcNextIndex = function () {
        if (!this.isForward) {
            this.frameIndex + 1 < this.totalFrames ? this.frameIndex += 1 : this.frameIndex = 0;
        }
        else {
            this.frameIndex - 1 < 0 ? this.frameIndex = this.totalFrames - 1 : this.frameIndex -= 1;
        }
    };
    GreenLightComponent.prototype.initControls = function () {
        var _this = this;
        this.animationControls = this.fb.group({
            isOnPause: false,
            isForward: true,
        });
        var pauseHandler = this.animationControls.get('isOnPause');
        var directionHandler = this.animationControls.get('isForward');
        var frameSpeed = this.animationControls.get('frameSpeed');
        pauseHandler.valueChanges
            .subscribe(function (val) {
            val ? _this.ticker.stop() : _this.ticker.start();
        });
        directionHandler.valueChanges
            .subscribe(function (val) {
            _this.isForward = val;
        });
    };
    GreenLightComponent.prototype.restart = function () {
        this.frameIndex = 0; // reset frame index;
        var pauseHandler = this.animationControls.get('isOnPause');
        pauseHandler.setValue(false);
    };
    GreenLightComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    GreenLightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-green-light',
            template: __webpack_require__("../../../../../src/app/green-light/green-light.component.html"),
            styles: [__webpack_require__("../../../../../src/app/green-light/green-light.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__green_light_service__["a" /* GreenLightService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__green_light_service__["a" /* GreenLightService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], GreenLightComponent);
    return GreenLightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/green-light/green-light.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenLightModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__green_light_component__ = __webpack_require__("../../../../../src/app/green-light/green-light.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__green_light_routing__ = __webpack_require__("../../../../../src/app/green-light/green-light.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GreenLightModule = /** @class */ (function () {
    function GreenLightModule() {
    }
    GreenLightModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__green_light_routing__["a" /* GreenLightRoutes */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__green_light_component__["a" /* GreenLightComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__green_light_component__["a" /* GreenLightComponent */]],
        })
    ], GreenLightModule);
    return GreenLightModule;
}());



/***/ }),

/***/ "../../../../../src/app/green-light/green-light.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenLightRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__green_light_component__ = __webpack_require__("../../../../../src/app/green-light/green-light.component.ts");


var greenLightRoutes = [
    {
        path: 'green-light', component: __WEBPACK_IMPORTED_MODULE_1__green_light_component__["a" /* GreenLightComponent */],
    },
];
var GreenLightRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(greenLightRoutes);


/***/ }),

/***/ "../../../../../src/app/green-light/green-light.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenLightService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pixi_js__ = __webpack_require__("../../../../pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pixi_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GreenLightService = /** @class */ (function () {
    function GreenLightService() {
    }
    GreenLightService.prototype.resourcesArray = function (total, pathPart) {
        var frames = 0;
        var textures = [];
        // fill array by PIXI.Texture
        do {
            frames += 1;
            textures.push(__WEBPACK_IMPORTED_MODULE_1_pixi_js__["Texture"].fromImage("" + pathPart + frames + ".jpg"));
        } while (frames < total);
        return textures;
    };
    GreenLightService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GreenLightService);
    return GreenLightService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map