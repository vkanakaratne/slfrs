webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/**
 * This is a singleton class
 */
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        //Provide all the Application Configs here
        this.version = "1.0.0";
        this.locale = "en-US";
        this.currencyFormat = { style: "currency", currency: "USD" };
        this.dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        // API Related configs
        this.apiPort = "8080";
        if (this.apiProtocol === undefined) {
            this.apiProtocol = window.location.protocol;
        }
        if (this.apiHostName === undefined) {
            this.apiHostName = window.location.hostname;
        }
        if (this.apiPort === undefined) {
            this.apiPort = window.location.port;
        }
        if (this.apiHostName.includes("infomud") || this.apiHostName.includes("heroku")) {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + "/";
        }
        else {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort + "/";
        }
        if (this.locale === undefined) {
            this.locale = navigator.language;
        }
    }
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_logout_logout_component__ = __webpack_require__("./src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_master_data_master_data_component__ = __webpack_require__("./src/app/pages/master_data/master_data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_file_upload_file_upload_component__ = __webpack_require__("./src/app/pages/file_upload/file_upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_validation_validation_component__ = __webpack_require__("./src/app/pages/validation/validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_generate_reports_generate_reports_component__ = __webpack_require__("./src/app/pages/generate_reports/generate_reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_old_reports_old_reports_component__ = __webpack_require__("./src/app/pages/old_reports/old_reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_entry_generation_entry_generation_component__ = __webpack_require__("./src/app/pages/entry_generation/entry_generation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth_guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_404_page_not_found_component__ = __webpack_require__("./src/app/pages/404/page-not-found.component.ts");













var routes = [
    //Important: The sequence of path is important as the router go over then in sequential manner
    { path: '', redirectTo: '/home/newreport/master', pathMatch: 'full' },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: '/home/newreport/master', pathMatch: 'full', data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            {
                path: 'newreport',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: -1 }],
                children: [
                    { path: '', redirectTo: '/home/newreport/master', pathMatch: 'full' },
                    { path: 'master', component: __WEBPACK_IMPORTED_MODULE_5__pages_master_data_master_data_component__["a" /* MasterDataComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 0 }] },
                    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_6__pages_file_upload_file_upload_component__["a" /* FileUploadComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 1 }] },
                    { path: 'validate', component: __WEBPACK_IMPORTED_MODULE_7__pages_validation_validation_component__["a" /* ValidationComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 2 }] },
                    { path: 'generatereports', component: __WEBPACK_IMPORTED_MODULE_8__pages_generate_reports_generate_reports_component__["a" /* GenerateReportsComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 3 }] }
                ]
            },
            { path: 'oldreports', component: __WEBPACK_IMPORTED_MODULE_9__pages_old_reports_old_reports_component__["a" /* OldReportsComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            { path: 'entrygeneration', component: __WEBPACK_IMPORTED_MODULE_10__pages_entry_generation_entry_generation_component__["a" /* EntryGenerationComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__["a" /* LoginComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_3__pages_logout_logout_component__["a" /* LogoutComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__pages_404_page_not_found_component__["a" /* PageNotFoundComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* unused harmony export View_AppComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AppComponent = [];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["p" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], [], null, null)], null, null); }
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("app-root", __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_charts_release_common_tooltip_tooltip_component_ngfactory__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_clr_angular_clr_angular_ngfactory__ = __webpack_require__("./node_modules/@clr/angular/clr-angular.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component_ngfactory__ = __webpack_require__("./src/app/home.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_component_ngfactory__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_master_data_master_data_component_ngfactory__ = __webpack_require__("./src/app/pages/master_data/master_data.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_file_upload_file_upload_component_ngfactory__ = __webpack_require__("./src/app/pages/file_upload/file_upload.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_validation_validation_component_ngfactory__ = __webpack_require__("./src/app/pages/validation/validation.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_generate_reports_generate_reports_component_ngfactory__ = __webpack_require__("./src/app/pages/generate_reports/generate_reports.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_old_reports_old_reports_component_ngfactory__ = __webpack_require__("./src/app/pages/old_reports/old_reports.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_entry_generation_entry_generation_component_ngfactory__ = __webpack_require__("./src/app/pages/entry_generation/entry_generation.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component_ngfactory__ = __webpack_require__("./src/app/pages/login/login.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout_component_ngfactory__ = __webpack_require__("./src/app/pages/logout/logout.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_404_page_not_found_component_ngfactory__ = __webpack_require__("./src/app/pages/404/page-not-found.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component_ngfactory__ = __webpack_require__("./src/app/app.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_animations_browser__ = __webpack_require__("./node_modules/@angular/animations/esm5/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable_release_services_scrollbar_helper_service__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/services/scrollbar-helper.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable_release_services_scrollbar_helper_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable_release_services_scrollbar_helper_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_dimensions_helper_service__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/services/dimensions-helper.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_dimensions_helper_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_dimensions_helper_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__swimlane_ngx_charts_release_common_tooltip_injection_service__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/tooltip/injection.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_charts_release_common_tooltip_tooltip_service__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__clr_angular__ = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_config__ = __webpack_require__("./src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth_guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_api_order_service__ = __webpack_require__("./src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_api_product_service__ = __webpack_require__("./src/app/services/api/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_api_customer_service__ = __webpack_require__("./src/app/services/api/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_api_employee_service__ = __webpack_require__("./src/app/services/api/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/datatable.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts_release_common_axes_axes_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/axes/axes.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__swimlane_ngx_charts_release_common_tooltip_tooltip_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__swimlane_ngx_charts_release_common_chart_common_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/common/chart-common.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__swimlane_ngx_charts_release_area_chart_area_chart_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/area-chart/area-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__swimlane_ngx_charts_release_bar_chart_bar_chart_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/bar-chart/bar-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/bubble-chart/bubble-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/force-directed-graph/force-directed-graph.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__swimlane_ngx_charts_release_heat_map_heat_map_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/heat-map/heat-map.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__swimlane_ngx_charts_release_line_chart_line_chart_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/line-chart/line-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__swimlane_ngx_charts_release_pie_chart_pie_chart_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/pie-chart/pie-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__swimlane_ngx_charts_release_polar_chart_polar_chart_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/polar-chart/polar-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__swimlane_ngx_charts_release_number_card_number_card_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/number-card/number-card.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_charts_release_tree_map_tree_map_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/tree-map/tree-map.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__swimlane_ngx_charts_release_gauge_gauge_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/gauge/gauge.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__swimlane_ngx_charts_release_ngx_charts_module__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/ngx-charts.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_master_data_master_data_component__ = __webpack_require__("./src/app/pages/master_data/master_data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_file_upload_file_upload_component__ = __webpack_require__("./src/app/pages/file_upload/file_upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_validation_validation_component__ = __webpack_require__("./src/app/pages/validation/validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_generate_reports_generate_reports_component__ = __webpack_require__("./src/app/pages/generate_reports/generate_reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_old_reports_old_reports_component__ = __webpack_require__("./src/app/pages/old_reports/old_reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_entry_generation_entry_generation_component__ = __webpack_require__("./src/app/pages/entry_generation/entry_generation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_logout_logout_component__ = __webpack_require__("./src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_404_page_not_found_component__ = __webpack_require__("./src/app/pages/404/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




































































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_charts_release_common_tooltip_tooltip_component_ngfactory__["a" /* TooltipContentComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clr_angular_clr_angular_ngfactory__["e" /* ɵuNgFactory */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clr_angular_clr_angular_ngfactory__["a" /* ClrDateContainerNgFactory */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clr_angular_clr_angular_ngfactory__["d" /* ɵdlNgFactory */], __WEBPACK_IMPORTED_MODULE_5__home_component_ngfactory__["a" /* HomeComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_component_ngfactory__["a" /* DashboardComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_7__pages_master_data_master_data_component_ngfactory__["a" /* MasterDataComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_8__pages_file_upload_file_upload_component_ngfactory__["a" /* FileUploadComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_9__pages_validation_validation_component_ngfactory__["a" /* ValidationComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_10__pages_generate_reports_generate_reports_component_ngfactory__["a" /* GenerateReportsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_11__pages_old_reports_old_reports_component_ngfactory__["a" /* OldReportsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_12__pages_entry_generation_entry_generation_component_ngfactory__["a" /* EntryGenerationComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component_ngfactory__["a" /* LoginComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout_component_ngfactory__["a" /* LogoutComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_15__pages_404_page_not_found_component_ngfactory__["a" /* PageNotFoundComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_16__app_component_ngfactory__["a" /* AppComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵq"], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__angular_common__["NgLocalization"], __WEBPACK_IMPORTED_MODULE_17__angular_common__["NgLocaleLocalization"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_17__angular_common__["ɵa"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵi"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵn"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵo"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵe"], [__WEBPACK_IMPORTED_MODULE_17__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Sanitizer"], null, [__WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["DomSanitizer"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["HAMMER_GESTURE_CONFIG"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["HammerGestureConfig"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵDomEventsPlugin"](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵKeyEventsPlugin"](p1_0), new __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵHammerGesturesPlugin"](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_17__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_17__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_17__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["HAMMER_GESTURE_CONFIG"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["EventManager"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["EventManager"], [__WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["EVENT_MANAGER_PLUGINS"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵDomSharedStylesHost"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵDomSharedStylesHost"], [__WEBPACK_IMPORTED_MODULE_17__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵDomRendererFactory2"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵDomRendererFactory2"], [__WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["EventManager"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵDomSharedStylesHost"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_19__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["d" /* ɵc */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_19__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */], __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["e" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_19__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_19__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["f" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵDomRendererFactory2"], __WEBPACK_IMPORTED_MODULE_19__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵSharedStylesHost"], null, [__WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵDomSharedStylesHost"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["Meta"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["Meta"], [__WEBPACK_IMPORTED_MODULE_17__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["Title"], [__WEBPACK_IMPORTED_MODULE_17__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_21__angular_animations__["AnimationBuilder"], __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["b" /* ɵBrowserAnimationBuilder */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_22__angular_forms__["s" /* ɵi */], __WEBPACK_IMPORTED_MODULE_22__angular_forms__["s" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_22__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_22__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["j" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["o" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_17__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["m" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["p" /* ɵh */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["p" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_23__angular_common_http__["j" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["n" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_23__angular_common_http__["p" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["l" /* ɵd */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["l" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["k" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_23__angular_common_http__["l" /* ɵd */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["i" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["i" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_23__angular_common_http__["k" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_23__angular_common_http__["i" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["f" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["q" /* ɵinterceptingHandler */], [__WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpBackend */], [2, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["a" /* HTTP_INTERCEPTORS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_23__angular_common_http__["f" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable_release_services_scrollbar_helper_service__["ScrollbarHelper"], __WEBPACK_IMPORTED_MODULE_24__swimlane_ngx_datatable_release_services_scrollbar_helper_service__["ScrollbarHelper"], [__WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_dimensions_helper_service__["DimensionsHelper"], __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_dimensions_helper_service__["DimensionsHelper"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__swimlane_ngx_charts_release_common_tooltip_injection_service__["a" /* InjectionService */], __WEBPACK_IMPORTED_MODULE_26__swimlane_ngx_charts_release_common_tooltip_injection_service__["a" /* InjectionService */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_charts_release_common_tooltip_tooltip_service__["a" /* TooltipService */], __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_charts_release_common_tooltip_tooltip_service__["a" /* TooltipService */], [__WEBPACK_IMPORTED_MODULE_26__swimlane_ngx_charts_release_common_tooltip_injection_service__["a" /* InjectionService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_42" /* ÇlrFocusTrapTracker */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_42" /* ÇlrFocusTrapTracker */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_84" /* ɵdh */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_85" /* ɵdi */], [[3, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_84" /* ɵdh */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_29__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["y" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_router__["e" /* NoPreloading */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["e" /* NoPreloading */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_29__angular_router__["g" /* PreloadingStrategy */], null, [__WEBPACK_IMPORTED_MODULE_29__angular_router__["e" /* NoPreloading */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_29__angular_router__["q" /* RouterPreloader */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["q" /* RouterPreloader */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_29__angular_router__["g" /* PreloadingStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_router__["f" /* PreloadAllModules */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["f" /* PreloadAllModules */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_29__angular_router__["i" /* ROUTER_INITIALIZER */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["B" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["z" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_29__angular_router__["i" /* ROUTER_INITIALIZER */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* AppConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], [__WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_33__services_api_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_33__services_api_login_service__["a" /* LoginService */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__["a" /* AuthGuard */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_33__services_api_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */], [__WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* AppConfig */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_36__services_api_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_36__services_api_order_service__["a" /* OrderService */], [__WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_37__services_api_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_37__services_api_product_service__["a" /* ProductService */], [__WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_38__services_api_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_38__services_api_customer_service__["a" /* CustomerService */], [__WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_39__services_api_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_39__services_api_employee_service__["a" /* EmployeeService */], [__WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_17__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_17__angular_common__["CommonModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵa"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"], function () { return [__WEBPACK_IMPORTED_MODULE_29__angular_router__["u" /* ɵb */]()]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["z" /* ɵg */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["z" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"], function (p0_0, p1_0) { return [__WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["ɵh"](p0_0), __WEBPACK_IMPORTED_MODULE_29__angular_router__["A" /* ɵh */](p1_0)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"]], __WEBPACK_IMPORTED_MODULE_29__angular_router__["z" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵConsole"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["BrowserModule"], [[3, __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["BrowserModule"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_22__angular_forms__["q" /* ɵba */], __WEBPACK_IMPORTED_MODULE_22__angular_forms__["q" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_22__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_22__angular_forms__["e" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_22__angular_forms__["n" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_22__angular_forms__["n" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module__["NgxDatatableModule"], __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module__["NgxDatatableModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts_release_common_axes_axes_module__["a" /* AxesModule */], __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts_release_common_axes_axes_module__["a" /* AxesModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_42__swimlane_ngx_charts_release_common_tooltip_tooltip_module__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_42__swimlane_ngx_charts_release_common_tooltip_tooltip_module__["a" /* TooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_43__swimlane_ngx_charts_release_common_chart_common_module__["a" /* ChartCommonModule */], __WEBPACK_IMPORTED_MODULE_43__swimlane_ngx_charts_release_common_chart_common_module__["a" /* ChartCommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_44__swimlane_ngx_charts_release_area_chart_area_chart_module__["a" /* AreaChartModule */], __WEBPACK_IMPORTED_MODULE_44__swimlane_ngx_charts_release_area_chart_area_chart_module__["a" /* AreaChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_45__swimlane_ngx_charts_release_bar_chart_bar_chart_module__["a" /* BarChartModule */], __WEBPACK_IMPORTED_MODULE_45__swimlane_ngx_charts_release_bar_chart_bar_chart_module__["a" /* BarChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_46__swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__["a" /* BubbleChartModule */], __WEBPACK_IMPORTED_MODULE_46__swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__["a" /* BubbleChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_47__swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__["a" /* ForceDirectedGraphModule */], __WEBPACK_IMPORTED_MODULE_47__swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__["a" /* ForceDirectedGraphModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_48__swimlane_ngx_charts_release_heat_map_heat_map_module__["a" /* HeatMapModule */], __WEBPACK_IMPORTED_MODULE_48__swimlane_ngx_charts_release_heat_map_heat_map_module__["a" /* HeatMapModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_49__swimlane_ngx_charts_release_line_chart_line_chart_module__["a" /* LineChartModule */], __WEBPACK_IMPORTED_MODULE_49__swimlane_ngx_charts_release_line_chart_line_chart_module__["a" /* LineChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_50__swimlane_ngx_charts_release_pie_chart_pie_chart_module__["a" /* PieChartModule */], __WEBPACK_IMPORTED_MODULE_50__swimlane_ngx_charts_release_pie_chart_pie_chart_module__["a" /* PieChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_51__swimlane_ngx_charts_release_polar_chart_polar_chart_module__["a" /* PolarChartModule */], __WEBPACK_IMPORTED_MODULE_51__swimlane_ngx_charts_release_polar_chart_polar_chart_module__["a" /* PolarChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_52__swimlane_ngx_charts_release_number_card_number_card_module__["a" /* NumberCardModule */], __WEBPACK_IMPORTED_MODULE_52__swimlane_ngx_charts_release_number_card_number_card_module__["a" /* NumberCardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_charts_release_tree_map_tree_map_module__["a" /* TreeMapModule */], __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_charts_release_tree_map_tree_map_module__["a" /* TreeMapModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_54__swimlane_ngx_charts_release_gauge_gauge_module__["a" /* GaugeModule */], __WEBPACK_IMPORTED_MODULE_54__swimlane_ngx_charts_release_gauge_gauge_module__["a" /* GaugeModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_55__swimlane_ngx_charts_release_ngx_charts_module__["a" /* NgxChartsModule */], __WEBPACK_IMPORTED_MODULE_55__swimlane_ngx_charts_release_ngx_charts_module__["a" /* NgxChartsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["S" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["S" /* ClrIconModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_43" /* ɵa */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_43" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_103" /* ɵj */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_103" /* ɵj */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["M" /* ClrDropdownModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["M" /* ClrDropdownModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["d" /* ClrAlertModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["d" /* ClrAlertModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["N" /* ClrEmphasisModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["N" /* ClrEmphasisModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["n" /* ClrCheckboxModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["n" /* ClrCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_110" /* ɵt */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_110" /* ɵt */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_112" /* ɵv */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_112" /* ɵv */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["G" /* ClrDatepickerModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["G" /* ClrDatepickerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["O" /* ClrFormsModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["O" /* ClrFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["X" /* ClrLoadingModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["X" /* ClrLoadingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_50" /* ɵbh */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_50" /* ɵbh */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_76" /* ɵcu */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_76" /* ɵcu */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["A" /* ClrDatagridModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["A" /* ClrDatagridModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_15" /* ClrStackViewModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_15" /* ClrStackViewModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_26" /* ClrTreeViewModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_26" /* ClrTreeViewModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["r" /* ClrDataModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["r" /* ClrDataModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_0" /* ClrModalModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_0" /* ClrModalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["W" /* ClrLoadingButtonModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["W" /* ClrLoadingButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["i" /* ClrButtonGroupModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["i" /* ClrButtonGroupModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["j" /* ClrButtonModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["j" /* ClrButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_16" /* ClrSyntaxHighlightModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_16" /* ClrSyntaxHighlightModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["p" /* ClrCodeModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["p" /* ClrCodeModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["Y" /* ClrMainContainerModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["Y" /* ClrMainContainerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_2" /* ClrNavigationModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_2" /* ClrNavigationModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_86" /* ɵdj */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_86" /* ɵdj */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_21" /* ClrTabsModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_21" /* ClrTabsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_31" /* ClrVerticalNavModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_31" /* ClrVerticalNavModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["U" /* ClrLayoutModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["U" /* ClrLayoutModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_8" /* ClrSignpostModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_8" /* ClrSignpostModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_24" /* ClrTooltipModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_24" /* ClrTooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_3" /* ClrPopoverModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_3" /* ClrPopoverModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_35" /* ClrWizardModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["_35" /* ClrWizardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__clr_angular__["a" /* ClarityModule */], __WEBPACK_IMPORTED_MODULE_28__clr_angular__["a" /* ClarityModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_29__angular_router__["t" /* ɵa */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["w" /* ɵd */], [[3, __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["s" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["c" /* DefaultUrlSerializer */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["b" /* ChildrenOutletContexts */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_29__angular_router__["h" /* ROUTER_CONFIGURATION */], { useHash: true }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_17__angular_common__["LocationStrategy"], __WEBPACK_IMPORTED_MODULE_29__angular_router__["v" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_17__angular_common__["PlatformLocation"], [2, __WEBPACK_IMPORTED_MODULE_17__angular_common__["APP_BASE_HREF"]], __WEBPACK_IMPORTED_MODULE_29__angular_router__["h" /* ROUTER_CONFIGURATION */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_17__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_17__angular_common__["Location"], [__WEBPACK_IMPORTED_MODULE_17__angular_common__["LocationStrategy"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoader"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoaderConfig"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_29__angular_router__["j" /* ROUTES */], function () { return [[{ path: "", redirectTo: "/home/newreport/master", pathMatch: "full" }, { path: "home", component: __WEBPACK_IMPORTED_MODULE_56__home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__["a" /* AuthGuard */]], children: [{ path: "", redirectTo: "/home/newreport/master", pathMatch: "full", data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] }, { path: "newreport", component: __WEBPACK_IMPORTED_MODULE_57__pages_dashboard_dashboard_component__["a" /* DashboardComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: -1 }], children: [{ path: "", redirectTo: "/home/newreport/master", pathMatch: "full" }, { path: "master", component: __WEBPACK_IMPORTED_MODULE_58__pages_master_data_master_data_component__["a" /* MasterDataComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 0 }] }, { path: "upload", component: __WEBPACK_IMPORTED_MODULE_59__pages_file_upload_file_upload_component__["a" /* FileUploadComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 1 }] }, { path: "validate", component: __WEBPACK_IMPORTED_MODULE_60__pages_validation_validation_component__["a" /* ValidationComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 2 }] }, { path: "generatereports", component: __WEBPACK_IMPORTED_MODULE_61__pages_generate_reports_generate_reports_component__["a" /* GenerateReportsComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 3 }] }] }, { path: "oldreports", component: __WEBPACK_IMPORTED_MODULE_62__pages_old_reports_old_reports_component__["a" /* OldReportsComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] }, { path: "entrygeneration", component: __WEBPACK_IMPORTED_MODULE_63__pages_entry_generation_entry_generation_component__["a" /* EntryGenerationComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] }] }, { path: "login", component: __WEBPACK_IMPORTED_MODULE_64__pages_login_login_component__["a" /* LoginComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }, { path: "logout", component: __WEBPACK_IMPORTED_MODULE_65__pages_logout_logout_component__["a" /* LogoutComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }, { path: "**", component: __WEBPACK_IMPORTED_MODULE_66__pages_404_page_not_found_component__["a" /* PageNotFoundComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }]]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["x" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_29__angular_router__["s" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_17__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_29__angular_router__["j" /* ROUTES */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["h" /* ROUTER_CONFIGURATION */], [2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["r" /* UrlHandlingStrategy */]], [2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["k" /* RouteReuseStrategy */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["o" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["o" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["t" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_67__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_67__app_routing_module__["a" /* AppRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["m" /* ɵe */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["n" /* ɵf */], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_LogoComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_LogoComponent_0;
/* unused harmony export View_LogoComponent_Host_0 */
/* unused harmony export LogoComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_component__ = __webpack_require__("./src/app/components/logo/logo.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_LogoComponent = [];
var RenderType_LogoComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_LogoComponent, data: {} });

function View_LogoComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "HNB Logo"], ["src", "assets/images/HNB.png"], ["width", "160"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_LogoComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "s-logo", [], null, null, null, View_LogoComponent_0, RenderType_LogoComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__logo_component__["a" /* LogoComponent */], [], null, null)], null, null); }
var LogoComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("s-logo", __WEBPACK_IMPORTED_MODULE_1__logo_component__["a" /* LogoComponent */], View_LogoComponent_Host_0, { fontColor: "fontColor", iconColor: "iconColor" }, {}, []);



/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.fontColor = "#63666A";
        this.iconColor = "#E3611B";
    }
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/home.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_HomeComponent */
/* unused harmony export View_HomeComponent_0 */
/* unused harmony export View_HomeComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_scss_ngstyle__ = __webpack_require__("./src/app/home.scss.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clr_angular__ = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_clr_angular_clr_angular_ngfactory__ = __webpack_require__("./node_modules/@clr/angular/clr-angular.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_HomeComponent = [__WEBPACK_IMPORTED_MODULE_0__home_scss_ngstyle__["a" /* styles */]];
var RenderType_HomeComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 20, "div", [["class", "alert alert-app-level"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 4, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeAppAlert() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "clr-icon", [["aria-hidden", "true"], ["shape", "close"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__clr_angular__["R" /* ClrIconCustomTag */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 11, "div", [["class", "alert-item alert-item"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_clr_angular_clr_angular_ngfactory__["c" /* View_ClrAlertItem_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_clr_angular_clr_angular_ngfactory__["b" /* RenderType_ClrAlertItem */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](9, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__clr_angular__["c" /* ClrAlertItem */], [__WEBPACK_IMPORTED_MODULE_2__clr_angular__["_108" /* ɵr */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, 0, 1, "div", [["class", "alert-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                Alert Type: Info\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, 0, 4, "div", [["class", "alert-actions"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 1, "button", [["class", "btn alert-action"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Action"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], null, null); }
function View_HomeComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 6, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 671744, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* RouterLinkActive */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 1, "span", [["class", "nav-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](6, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.href; _ck(_v, 1, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.label; _ck(_v, 6, 0, currVal_4); }); }
function View_HomeComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 671744, [[4, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* RouterLinkActive */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 3, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](7, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.href; _ck(_v, 3, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.label; _ck(_v, 7, 0, currVal_4); }); }
function View_HomeComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 7, "nav", [["class", "subnav"], ["style", "background-color:#e87300"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 4, "ul", [["class", "nav"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.appHeaderItems[_co.selectedHeaderItemIndex].subNav; _ck(_v, 5, 0, currVal_0); }, null); }
function View_HomeComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 47, "div", [["class", "no-margin"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 31, "header", [["class", "header header-2"], ["style", "background-color:#b90900"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 10, "div", [["class", "branding"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 3, "div", [["style", "width:150px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 0, "img", [["alt", "HNB Logo"], ["src", "assets/images/HNB.png"], ["width", "100"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Fair Value Computation"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 4, "div", [["class", "header-nav"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 10, "div", [["class", "header-actions"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 1, "label", [["style", "line-height: 60px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](31, null, [" ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](33, 0, null, null, 4, "a", [["class", "nav-link nav-text"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](34, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, null, 1, "clr-icon", [["shape", "power"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](37, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__clr_angular__["R" /* ClrIconCustomTag */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](45, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](46, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["p" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showAppAlert; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.appHeaderItems; _ck(_v, 25, 0, currVal_1); var currVal_5 = "/logout"; _ck(_v, 34, 0, currVal_5); var currVal_6 = (_co.appHeaderItems[_co.selectedHeaderItemIndex].subNav && (_co.appHeaderItems[_co.selectedHeaderItemIndex].subNav.length > 0)); _ck(_v, 43, 0, currVal_6); _ck(_v, 46, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.userName; _ck(_v, 31, 0, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).target; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).href; _ck(_v, 33, 0, currVal_3, currVal_4); }); }
function View_HomeComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "home-comp", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__services_api_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8__services_user_info_service__["a" /* UserInfoService */]], null, null)], null, null); }
var HomeComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("home-comp", __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, activeRoute, loginService, userInfoService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.loginService = loginService;
        this.userInfoService = userInfoService;
        this.showAppAlert = false;
        this.appHeaderItems = [
            {
                label: 'New Report',
                href: '/home/newreport',
                subNav: [
                    { label: "Master Data", href: "/home/newreport/master" },
                    { label: "File Upload", href: "/home/newreport/upload" },
                    { label: "Validation", href: "/home/newreport/validate" },
                    { label: "Generate Reports", href: "/home/newreport/generatereports" },
                ]
            },
            { label: 'Old Reports', href: '/home/oldreports', subNav: [] },
            { label: 'Entry Generation', href: '/home/entrygeneration', subNav: [] }
        ];
        this.selectedHeaderItemIndex = 0;
        this.selectedSubNavItemIndex = 1;
        this.userName = "";
        // This block is to retrieve the data from the routes (routes are defined in app-routing.module.ts)
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* NavigationEnd */]; })
            .map(function (_) { return _this.router.routerState.root; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            ;
            return route;
        })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (data) {
            console.log("Route data===: ", data[0]);
            _this.selectedHeaderItemIndex = data[0] ? data[0].selectedHeaderItemIndex : -1;
            _this.selectedSubNavItemIndex = data[0] ? data[0].selectedSubNavItemIndex : -1;
        });
        this.userName = this.userInfoService.getUserName();
    }
    HomeComponent.prototype.navbarSelectionChange = function (val) {
        // console.log(val);
    };
    HomeComponent.prototype.closeAppAlert = function () {
        this.showAppAlert = false;
    };
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home.scss.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [":branding-inner {\n  background-color: black; }\n\n:header-2 {\n  background-color: #b90900; }\n"];



/***/ }),

/***/ "./src/app/pages/404/page-not-found.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_PageNotFoundComponent */
/* unused harmony export View_PageNotFoundComponent_0 */
/* unused harmony export View_PageNotFoundComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_not_found_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/404/page-not-found.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_component__ = __webpack_require__("./src/app/pages/404/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_PageNotFoundComponent = [__WEBPACK_IMPORTED_MODULE_0__page_not_found_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_PageNotFoundComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_PageNotFoundComponent, data: {} });

function View_PageNotFoundComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "s-page-not-found"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" 404 Page Not Found "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_PageNotFoundComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "page-not-found", [], null, null, null, View_PageNotFoundComponent_0, RenderType_PageNotFoundComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__page_not_found_component__["a" /* PageNotFoundComponent */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]], null, null)], null, null); }
var PageNotFoundComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("page-not-found", __WEBPACK_IMPORTED_MODULE_2__page_not_found_component__["a" /* PageNotFoundComponent */], View_PageNotFoundComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/404/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        console.log("404 : %s", router.url);
    }
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/404/page-not-found.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".s-page-not-found[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n  background-color: #005d84;\n  color: #eee;\n  font-size: 24px; }"];



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DashboardComponent */
/* unused harmony export View_DashboardComponent_0 */
/* unused harmony export View_DashboardComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/dashboard/dashboard.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DashboardComponent = [__WEBPACK_IMPORTED_MODULE_0__dashboard_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_DashboardComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });

function View_DashboardComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["p" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_DashboardComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-dashboard-pg", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], [], null, null)], null, null); }
var DashboardComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-dashboard-pg", __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], View_DashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".s-dashboard-pg[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .s-dashboard-pg[_ngcontent-%COMP%]   .chart-box[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 0 16px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px; }"];



/***/ }),

/***/ "./src/app/pages/entry_generation/entry_generation.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_EntryGenerationComponent */
/* unused harmony export View_EntryGenerationComponent_0 */
/* unused harmony export View_EntryGenerationComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryGenerationComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entry_generation_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/entry_generation/entry_generation.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_generation_component__ = __webpack_require__("./src/app/pages/entry_generation/entry_generation.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_EntryGenerationComponent = [__WEBPACK_IMPORTED_MODULE_0__entry_generation_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_EntryGenerationComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_EntryGenerationComponent, data: {} });

function View_EntryGenerationComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "order-detail-pg pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_EntryGenerationComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-entrygen-pg", [], null, null, null, View_EntryGenerationComponent_0, RenderType_EntryGenerationComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__entry_generation_component__["a" /* EntryGenerationComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EntryGenerationComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-entrygen-pg", __WEBPACK_IMPORTED_MODULE_2__entry_generation_component__["a" /* EntryGenerationComponent */], View_EntryGenerationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/entry_generation/entry_generation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryGenerationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");


var EntryGenerationComponent = /** @class */ (function () {
    function EntryGenerationComponent() {
    }
    EntryGenerationComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    EntryGenerationComponent.prototype.getData = function () {
    };
    return EntryGenerationComponent;
}());



/***/ }),

/***/ "./src/app/pages/entry_generation/entry_generation.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".reportgen-pg[_ngcontent-%COMP%] {\n  width: 750px; }"];



/***/ }),

/***/ "./src/app/pages/file_upload/file_upload.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_FileUploadComponent */
/* unused harmony export View_FileUploadComponent_0 */
/* unused harmony export View_FileUploadComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_upload_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/file_upload/file_upload.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_upload_component__ = __webpack_require__("./src/app/pages/file_upload/file_upload.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_FileUploadComponent = [__WEBPACK_IMPORTED_MODULE_0__file_upload_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_FileUploadComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_FileUploadComponent, data: {} });

function View_FileUploadComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "div", [["class", "order-detail-pg pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "File upload page"], ["src", "assets/images/samples/upload.jpg"], ["width", "92%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_FileUploadComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-fileupload-pg", [], null, null, null, View_FileUploadComponent_0, RenderType_FileUploadComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__file_upload_component__["a" /* FileUploadComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FileUploadComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-fileupload-pg", __WEBPACK_IMPORTED_MODULE_2__file_upload_component__["a" /* FileUploadComponent */], View_FileUploadComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/file_upload/file_upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");


var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    FileUploadComponent.prototype.getData = function () {
    };
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/pages/file_upload/file_upload.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #FFC68F; }\n\n.fileupload-pg[_ngcontent-%COMP%] {\n  width: 750px; }"];



/***/ }),

/***/ "./src/app/pages/generate_reports/generate_reports.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_GenerateReportsComponent */
/* unused harmony export View_GenerateReportsComponent_0 */
/* unused harmony export View_GenerateReportsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateReportsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generate_reports_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/generate_reports/generate_reports.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generate_reports_component__ = __webpack_require__("./src/app/pages/generate_reports/generate_reports.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_GenerateReportsComponent = [__WEBPACK_IMPORTED_MODULE_0__generate_reports_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_GenerateReportsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_GenerateReportsComponent, data: {} });

function View_GenerateReportsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "div", [["class", "order-detail-pg pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "full reports"], ["src", "assets/images/samples/full_report.jpg"], ["width", "100%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_GenerateReportsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-reportgen-pg", [], null, null, null, View_GenerateReportsComponent_0, RenderType_GenerateReportsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__generate_reports_component__["a" /* GenerateReportsComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GenerateReportsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-reportgen-pg", __WEBPACK_IMPORTED_MODULE_2__generate_reports_component__["a" /* GenerateReportsComponent */], View_GenerateReportsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/generate_reports/generate_reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");


var GenerateReportsComponent = /** @class */ (function () {
    function GenerateReportsComponent() {
    }
    GenerateReportsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    GenerateReportsComponent.prototype.getData = function () {
    };
    return GenerateReportsComponent;
}());



/***/ }),

/***/ "./src/app/pages/generate_reports/generate_reports.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".reportgen-pg[_ngcontent-%COMP%] {\n  width: 750px; }"];



/***/ }),

/***/ "./src/app/pages/login/login.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LoginComponent */
/* unused harmony export View_LoginComponent_0 */
/* unused harmony export View_LoginComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/login/login.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_logo_logo_component_ngfactory__ = __webpack_require__("./src/app/components/logo/logo.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_logo_logo_component__ = __webpack_require__("./src/app/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_LoginComponent = [__WEBPACK_IMPORTED_MODULE_0__login_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_LoginComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["style", "color: indianred; font-weight: bold"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errMsg; _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 55, "div", [["class", "s-login-pg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 4, "div", [["class", "s-login-pg-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" User Login"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 12, "div", [["align", "right"], ["class", "s-login-pg-head"], ["width", "100%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "s-logo", [["align-items", "center"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__components_logo_logo_component_ngfactory__["b" /* View_LogoComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__components_logo_logo_component_ngfactory__["a" /* RenderType_LogoComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__components_logo_logo_component__["a" /* LogoComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "h3", [["align", "center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["SLFRS Fair Value Computations"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 3, "font", [["color", "black"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Integrated with AD"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 26, "form", [["class", "s-login-pg-form"], ["name", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 24).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 24).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.login() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["r" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](24, 4210688, [["f", 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](26, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 7, "input", [["name", "username"], ["placeholder", "Username (demo)"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.username = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](30, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["o" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["o" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](33, 671744, [["username", 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](35, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](37, 0, null, null, 7, "input", [["name", "password"], ["placeholder", "Password (demo)"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 38)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 38).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 38)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 38)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](38, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](39, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["o" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["o" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](42, 671744, [["password", 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](44, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](46, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["LOG IN"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](50, 0, null, null, 4, "div", [["class", "s-login-pg-foot"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](53, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\t"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 30, 0, currVal_15); var currVal_16 = "username"; var currVal_17 = _co.model.username; _ck(_v, 33, 0, currVal_16, currVal_17); var currVal_26 = ""; _ck(_v, 39, 0, currVal_26); var currVal_27 = "password"; var currVal_28 = _co.model.password; _ck(_v, 42, 0, currVal_27, currVal_28); var currVal_29 = _co.errMsg; _ck(_v, 53, 0, currVal_29); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).ngClassPending; _ck(_v, 22, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).required ? "" : null); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassUntouched; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassTouched; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassPristine; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassDirty; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassValid; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassInvalid; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 28, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 39).required ? "" : null); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).ngClassUntouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).ngClassTouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).ngClassPristine; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).ngClassDirty; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).ngClassValid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).ngClassInvalid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).ngClassPending; _ck(_v, 37, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); }); }
function View_LoginComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-login-pg", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */], [__WEBPACK_IMPORTED_MODULE_7__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_8__services_api_login_service__["a" /* LoginService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-login-pg", __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.model = {};
        this.errMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.loginService.logout(false);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.getToken(this.model.username, this.model.password)
            .subscribe(function (resp) {
            if (resp.user === undefined || resp.user.token === undefined || resp.user.token === "INVALID") {
                _this.errMsg = 'Username or password is incorrect';
                return;
            }
            _this.router.navigate([resp.landingPage]);
        }, function (errResponse) {
            switch (errResponse.status) {
                case 401:
                    _this.errMsg = 'Username or password is incorrect';
                    break;
                case 404:
                    _this.errMsg = 'Service not found';
                case 408:
                    _this.errMsg = 'Request Timedout';
                case 500:
                    _this.errMsg = 'Internal Server Error';
                default:
                    _this.errMsg = 'Server Error';
            }
        });
    };
    LoginComponent.prototype.onSignUp = function () {
        this.router.navigate(['signup']);
    };
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: black; }\n\n.s-login-pg[_ngcontent-%COMP%] {\n  width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  margin: 48px 16px 16px 16px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15); }\n\n.s-login-pg[_ngcontent-%COMP%]   .s-login-pg-head[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 210px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #c0c0c2;\n    padding: 16px;\n    color: white; }\n\n.s-login-pg[_ngcontent-%COMP%]   .s-login-pg-form[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 24px 16px; }\n\n.s-login-pg[_ngcontent-%COMP%]   .s-login-pg-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      margin: 16px; }\n\n.s-login-pg[_ngcontent-%COMP%]   .s-login-pg-foot[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.s-login-pg[_ngcontent-%COMP%]   .s-login-pg-title[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: left;\n        -ms-flex-align: left;\n            align-items: left;\n    background-color: #191970; }\n\n.s-login-pg[_ngcontent-%COMP%]   .s-login-pg-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin-top: 0;\n      color: white; }"];



/***/ }),

/***/ "./src/app/pages/logout/logout.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LogoutComponent */
/* unused harmony export View_LogoutComponent_0 */
/* unused harmony export View_LogoutComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logout_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/logout/logout.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_component__ = __webpack_require__("./src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_LogoutComponent = [__WEBPACK_IMPORTED_MODULE_0__logout_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_LogoutComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_LogoutComponent, data: {} });

function View_LogoutComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 10, "div", [["class", "tile column center white"], ["style", "width:500px"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" You are now signed out "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" You may "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Sign in again "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_2 = "/login"; _ck(_v, 8, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).href; _ck(_v, 7, 0, currVal_0, currVal_1); }); }
function View_LogoutComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-logout-pg", [], null, null, null, View_LogoutComponent_0, RenderType_LogoutComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__logout_component__["a" /* LogoutComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_user_info_service__["a" /* UserInfoService */]], null, null)], null, null); }
var LogoutComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-logout-pg", __WEBPACK_IMPORTED_MODULE_4__logout_component__["a" /* LogoutComponent */], View_LogoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(userInfoService) {
        this.userInfoService = userInfoService;
        this.userInfoService.removeUserInfo();
    }
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/logout/logout.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fafafa; }"];



/***/ }),

/***/ "./src/app/pages/master_data/master_data.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_MasterDataComponent */
/* unused harmony export View_MasterDataComponent_0 */
/* unused harmony export View_MasterDataComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDataComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__master_data_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/master_data/master_data.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_data_component__ = __webpack_require__("./src/app/pages/master_data/master_data.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_MasterDataComponent = [__WEBPACK_IMPORTED_MODULE_0__master_data_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_MasterDataComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_MasterDataComponent, data: {} });

function View_MasterDataComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "div", [["class", "order-detail-pg pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Master Data"], ["src", "assets/images/samples/master_data.jpg"], ["width", "91%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_MasterDataComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-master-pg", [], null, null, null, View_MasterDataComponent_0, RenderType_MasterDataComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__master_data_component__["a" /* MasterDataComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MasterDataComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-master-pg", __WEBPACK_IMPORTED_MODULE_2__master_data_component__["a" /* MasterDataComponent */], View_MasterDataComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/master_data/master_data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");


var MasterDataComponent = /** @class */ (function () {
    function MasterDataComponent() {
    }
    MasterDataComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    MasterDataComponent.prototype.getData = function () {
    };
    return MasterDataComponent;
}());



/***/ }),

/***/ "./src/app/pages/master_data/master_data.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #FFC68F; }\n\n.master-pg[_ngcontent-%COMP%] {\n  width: 750px; }"];



/***/ }),

/***/ "./src/app/pages/old_reports/old_reports.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_OldReportsComponent */
/* unused harmony export View_OldReportsComponent_0 */
/* unused harmony export View_OldReportsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldReportsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__old_reports_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/old_reports/old_reports.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__old_reports_component__ = __webpack_require__("./src/app/pages/old_reports/old_reports.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_OldReportsComponent = [__WEBPACK_IMPORTED_MODULE_0__old_reports_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_OldReportsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_OldReportsComponent, data: {} });

function View_OldReportsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "order-detail-pg pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_OldReportsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-oldreports-pg", [], null, null, null, View_OldReportsComponent_0, RenderType_OldReportsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__old_reports_component__["a" /* OldReportsComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var OldReportsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-oldreports-pg", __WEBPACK_IMPORTED_MODULE_2__old_reports_component__["a" /* OldReportsComponent */], View_OldReportsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/old_reports/old_reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");


var OldReportsComponent = /** @class */ (function () {
    function OldReportsComponent() {
    }
    OldReportsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    OldReportsComponent.prototype.getData = function () {
    };
    return OldReportsComponent;
}());



/***/ }),

/***/ "./src/app/pages/old_reports/old_reports.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".oldreports-pg[_ngcontent-%COMP%] {\n  width: 750px; }"];



/***/ }),

/***/ "./src/app/pages/validation/validation.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ValidationComponent */
/* unused harmony export View_ValidationComponent_0 */
/* unused harmony export View_ValidationComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validation_scss_shim_ngstyle__ = __webpack_require__("./src/app/pages/validation/validation.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_component__ = __webpack_require__("./src/app/pages/validation/validation.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ValidationComponent = [__WEBPACK_IMPORTED_MODULE_0__validation_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ValidationComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ValidationComponent, data: {} });

function View_ValidationComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 3, "div", [["class", "order-detail-pg pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Data validation page"], ["src", "assets/images/samples/validation.jpg"], ["width", "85%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_ValidationComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-validation-pg", [], null, null, null, View_ValidationComponent_0, RenderType_ValidationComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__validation_component__["a" /* ValidationComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ValidationComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-validation-pg", __WEBPACK_IMPORTED_MODULE_2__validation_component__["a" /* ValidationComponent */], View_ValidationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/validation/validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");


var ValidationComponent = /** @class */ (function () {
    function ValidationComponent() {
    }
    ValidationComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ValidationComponent.prototype.getData = function () {
    };
    return ValidationComponent;
}());



/***/ }),

/***/ "./src/app/pages/validation/validation.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #FFC68F; }\n\n.validation-pg[_ngcontent-%COMP%] {\n  width: 750px; }"];



/***/ }),

/***/ "./src/app/services/api/api-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("./src/app/app-config.ts");






var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(appConfig, http, router, userInfoService) {
        this.appConfig = appConfig;
        this.http = http;
        this.router = router;
        this.userInfoService = userInfoService;
    }
    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    ApiRequestService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["g" /* HttpHeaders */]();
        var token = this.userInfoService.getStoredToken();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append("Authorization", token);
        }
        return headers;
    };
    ApiRequestService.prototype.get = function (url, urlParams) {
        var me = this;
        return this.http.get(this.appConfig.baseApiPath + url, { headers: this.getHeaders(), params: urlParams })
            .catch(function (error) {
            console.log("Some error in catch");
            if (error.status === 401 || error.status === 403) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.post = function (url, body) {
        var me = this;
        return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.put = function (url, body) {
        var me = this;
        return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.delete = function (url) {
        var me = this;
        return this.http.delete(this.appConfig.baseApiPath + url, { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    return ApiRequestService;
}());



/***/ }),

/***/ "./src/app/services/api/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");




var CustomerService = /** @class */ (function () {
    function CustomerService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    CustomerService.prototype.getCustomers = function (page, size) {
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var customerListSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/customers', params)
            .subscribe(function (jsonResp) {
            var items = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    address: v.address1 + ", <br/> " + v.city + ", " + v.state + " " + v.postalCode + " <br/> " + v.country
                });
                return newRow;
            });
            var returnObj = Object.assign({}, jsonResp, {
                items: items
            });
            customerListSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return customerListSubject;
    };
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/api/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");




var EmployeeService = /** @class */ (function () {
    function EmployeeService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    EmployeeService.prototype.getEmployees = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        return this.apiRequest.get('api/employees', params);
    };
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/api/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");






var LoginService = /** @class */ (function () {
    function LoginService(router, userInfoService, apiRequest) {
        this.router = router;
        this.userInfoService = userInfoService;
        this.apiRequest = apiRequest;
        this.landingPage = "/home/dashboard/order";
    }
    LoginService.prototype.getToken = function (username, password) {
        var _this = this;
        var me = this;
        var bodyData = {
            "username": username,
            "password": password,
        };
        /*
            Using BehaviorSubject instead of Subject
            In Angular services are initialized before the components, if any component is
            subscribing, it will only receive events which are executed after subscription.
            therefore if you put a syncronize next() in the service, the component wont get it.

            A BehaviourSubject will always provide the values wheather the subscription happened after or before event

        */
        var loginDataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]); // Will use this BehaviorSubject to emit data that we want after ajax login attempt
        var loginInfoReturn; // Object that we want to send back to Login Page
        this.apiRequest.post('session', bodyData)
            .subscribe(function (jsonResp) {
            if (jsonResp !== undefined && jsonResp !== null && jsonResp.operationStatus === "SUCCESS") {
                //Create a success object that we want to send back to login page
                loginInfoReturn = {
                    "success": true,
                    "message": jsonResp.operationMessage,
                    "landingPage": _this.landingPage,
                    "user": {
                        "userId": jsonResp.item.userId,
                        "email": jsonResp.item.emailAddress,
                        "displayName": jsonResp.item.firstName + " " + jsonResp.item.lastName,
                        "token": jsonResp.item.token,
                    }
                };
                // store username and jwt token in session storage to keep user logged in between page refreshes
                _this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn.user));
            }
            else {
                //Create a faliure object that we want to send back to login page
                loginInfoReturn = {
                    "success": false,
                    "message": jsonResp.msgDesc,
                    "landingPage": "/login"
                };
            }
            loginDataSubject.next(loginInfoReturn);
        }, function (err) {
            loginInfoReturn = {
                "success": false,
                "message": err.url + " >>> " + err.statusText + "[" + err.status + "]",
                "landingPage": "/login"
            };
        });
        return loginDataSubject;
    };
    LoginService.prototype.logout = function (navigatetoLogout) {
        if (navigatetoLogout === void 0) { navigatetoLogout = true; }
        // clear token remove user from local storage to log user out
        this.userInfoService.removeUserInfo();
        if (navigatetoLogout) {
            this.router.navigate(["logout"]);
        }
    };
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/api/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");




var OrderService = /** @class */ (function () {
    function OrderService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    /**
     * Gets List of orders
     */
    OrderService.prototype.getOrderInfo = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var orderListSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/orders', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    orderDate: me.translate.getDateString(v.orderDate),
                    paidDate: me.translate.getDateString(v.paidDate),
                    shippedDate: me.translate.getDateString(v.shippedDate)
                });
                return newRow;
            });
            orderListSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return orderListSubject;
    };
    /**
     * Gets Orders and Order Lines (Products in each order)
     */
    OrderService.prototype.getOrderDetails = function (orderId) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        if (orderId) {
            params = params.append('orderid', orderId.toString());
        }
        var orderDetailSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/order-details', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    orderDate: me.translate.getDateString(v.orderDate),
                    paidDate: me.translate.getDateString(v.paidDate),
                    shippedDate: me.translate.getDateString(v.shippedDate)
                });
                return newRow;
            });
            orderDetailSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return orderDetailSubject;
    };
    OrderService.prototype.getOrderStats = function (field) {
        return this.apiRequest.get('api/order-stats/' + field);
    };
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/api/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");




var ProductService = /** @class */ (function () {
    function ProductService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    ProductService.prototype.getProducts = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var productList = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/products', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    listPrice: me.translate.getCurrencyString(v.listPrice),
                    standardCost: me.translate.getCurrencyString(v.standardCost)
                });
                return newRow;
            });
            productList.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return productList;
    };
    ProductService.prototype.getProductStatsByQuantityOrdered = function () {
        return this.apiRequest.get('api/product-stats-by-quantity');
    };
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/api/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("./src/app/app-config.ts");

var TranslateService = /** @class */ (function () {
    function TranslateService(appConfig) {
        this.appConfig = appConfig;
        // Code to get Locale Info from Session Storage
    }
    TranslateService.prototype.getDateString = function (datenum) {
        return new Date(datenum).toLocaleDateString(this.appConfig.locale, this.appConfig.dateFormat);
    };
    TranslateService.prototype.getCurrencyString = function (number) {
        return number.toLocaleString(this.appConfig.locale, this.appConfig.currencyFormat);
    };
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/services/auth_guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, loginService, userInfoService) {
        this.router = router;
        this.loginService = loginService;
        this.userInfoService = userInfoService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
        //return true;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.userInfoService.isLoggedIn()) {
            return true;
        }
        console.log("User is not logged - This routing guard prvents redirection to any routes that needs logging.");
        //Store the original url in login service and then redirect to login page
        this.loginService.landingPage = url;
        this.router.navigate(['login',]);
        return false;
    };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/user-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
var UserInfoService = /** @class */ (function () {
    function UserInfoService() {
        this.currentUserKey = "currentUser";
        this.storage = sessionStorage; // <--- you may switch between sessionStorage or LocalStrage (only one place to change)
    }
    //Store userinfo from session storage
    UserInfoService.prototype.storeUserInfo = function (userInfoString) {
        this.storage.setItem(this.currentUserKey, userInfoString);
    };
    //Remove userinfo from session storage
    UserInfoService.prototype.removeUserInfo = function () {
        this.storage.removeItem(this.currentUserKey);
    };
    //Get userinfo from session storage
    UserInfoService.prototype.getUserInfo = function () {
        try {
            var userInfoString = this.storage.getItem(this.currentUserKey);
            if (userInfoString) {
                var userObj = JSON.parse(this.storage.getItem(this.currentUserKey));
                return userObj;
            }
            else {
                return null;
            }
        }
        catch (e) {
            return null;
        }
    };
    UserInfoService.prototype.isLoggedIn = function () {
        return this.storage.getItem(this.currentUserKey) ? true : false;
    };
    //Get User's Display name from session storage
    UserInfoService.prototype.getUserName = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.displayName;
        }
        return "no-user";
    };
    UserInfoService.prototype.getStoredToken = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.token;
        }
        return null;
    };
    return UserInfoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__ = __webpack_require__("./src/app/app.module.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["platformBrowser"]().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map