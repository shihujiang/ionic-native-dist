"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
// import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty } from './plugin';
var plugin_1 = require("./plugin");
// import { Observable } from 'rxjs/Observable';
/**
 * @name FaceRecognition
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { FaceRecognition } from 'ionic-native';
 *
 * FaceRecognition.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
var FaceRecognition = (function () {
    function FaceRecognition() {
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    FaceRecognition.coolMethod = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return FaceRecognition;
}());
__decorate([
    plugin_1.Cordova()
], FaceRecognition, "coolMethod", null);
FaceRecognition = __decorate([
    plugin_1.Plugin({
        pluginName: 'Face',
        plugin: 'cordova-plugin-pingan-face',
        pluginRef: 'face',
        platforms: ['Android', 'iOS']
    })
], FaceRecognition);
exports.FaceRecognition = FaceRecognition;
//# sourceMappingURL=face-recognition.js.map