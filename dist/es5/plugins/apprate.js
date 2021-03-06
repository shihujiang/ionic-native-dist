"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require("./plugin");
/**
 * @name App Rate
 * @description
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * @usage
 * ```typescript
 * import { AppRate } from 'ionic-native';
 *
 *  AppRate.preferences.storeAppURL = {
 *    ios: '<my_app_id>',
 *    android: 'market://details?id=<package_name>',
 *  };
 *
 * AppRate.promptForRating(false);
 * ```
 *
 * @interfaces
 * AppRatePreferences
 * AppRateStoreAppUrls
 * AppRateCallbacks
 *
 */
var AppRate = (function () {
    function AppRate() {
    }
    /**
     * Prompts the user for rating
     * @param {boolean} immediately  Show the rating prompt immediately.
     */
    AppRate.promptForRating = function (immediately) { };
    ;
    return AppRate;
}());
__decorate([
    plugin_1.CordovaProperty
], AppRate, "preferences", void 0);
__decorate([
    plugin_1.Cordova()
], AppRate, "promptForRating", null);
AppRate = __decorate([
    plugin_1.Plugin({
        pluginName: 'AppRate',
        plugin: 'cordova-plugin-apprate',
        pluginRef: 'AppRate',
        repo: 'https://github.com/pushandplay/cordova-plugin-apprate',
        platforms: ['Android', 'iOS']
    })
], AppRate);
exports.AppRate = AppRate;
//# sourceMappingURL=apprate.js.map