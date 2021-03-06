"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require("./plugin");
/**
* @name Background Mode
* @description
* Cordova plugin to prevent the app from going to sleep while in background.
* Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode
*@usage
* ```typescript
* import { BackgroundMode } from 'ionic-native';
*
* BackgroundMode.enable();
* ```
 *
 * @interfaces
 * BackgroundModeConfiguration
*/
var BackgroundMode = (function () {
    function BackgroundMode() {
    }
    /**
    * Enable the background mode.
    * Once called, prevents the app from being paused while in background.
    */
    BackgroundMode.enable = function () { };
    /**
    * Disable the background mode.
    * Once the background mode has been disabled, the app will be paused when in background.
    */
    BackgroundMode.disable = function () { return; };
    /**
    * Checks if background mode is enabled or not.
    * @returns {boolean} returns a boolean that indicates if the background mode is enabled.
    */
    BackgroundMode.isEnabled = function () { return; };
    /**
    * Can be used to get the information if the background mode is active.
    * @returns {boolean} returns a boolean that indicates if the background mode is active.
    */
    BackgroundMode.isActive = function () { return; };
    /**
    * Override the default title, ticker and text.
    * Available only for Android platform.
    * @param {Configure} options List of option to configure. See table below
    */
    BackgroundMode.setDefaults = function (options) { return; };
    /**
    * Modify the displayed information.
    * Available only for Android platform.
    * @param {Configure} options Any options you want to update. See table below.
    */
    BackgroundMode.configure = function (options) { return; };
    /**
    * Called when background mode is activated.
    * @returns {Observable<any>} returns an observable that emits when background mode is activated
    */
    BackgroundMode.onactivate = function () { return; };
    ;
    /**
    * Called when background mode is deactivated.
    * @returns {Observable<any>} returns an observable that emits when background mode is deactivated
    */
    BackgroundMode.ondeactivate = function () { return; };
    ;
    /**
    * Called when background mode fails
    * @returns {Observable<any>} returns an observable that emits when background mode fails
    */
    BackgroundMode.onfailure = function () { return; };
    ;
    return BackgroundMode;
}());
__decorate([
    plugin_1.Cordova({
        sync: true
    })
], BackgroundMode, "enable", null);
__decorate([
    plugin_1.Cordova()
], BackgroundMode, "disable", null);
__decorate([
    plugin_1.Cordova({
        sync: true
    })
], BackgroundMode, "isEnabled", null);
__decorate([
    plugin_1.Cordova({
        sync: true
    })
], BackgroundMode, "isActive", null);
__decorate([
    plugin_1.Cordova({
        platforms: ['Android']
    })
], BackgroundMode, "setDefaults", null);
__decorate([
    plugin_1.Cordova({
        platforms: ['Android']
    })
], BackgroundMode, "configure", null);
__decorate([
    plugin_1.CordovaFunctionOverride()
], BackgroundMode, "onactivate", null);
__decorate([
    plugin_1.CordovaFunctionOverride()
], BackgroundMode, "ondeactivate", null);
__decorate([
    plugin_1.CordovaFunctionOverride()
], BackgroundMode, "onfailure", null);
BackgroundMode = __decorate([
    plugin_1.Plugin({
        pluginName: 'BackgroundMode',
        plugin: 'cordova-plugin-background-mode',
        pluginRef: 'cordova.plugins.backgroundMode',
        repo: 'https://github.com/katzer/cordova-plugin-background-mode',
        platforms: ['Android', 'iOS', 'Windows Phone 8']
    })
], BackgroundMode);
exports.BackgroundMode = BackgroundMode;
//# sourceMappingURL=backgroundmode.js.map