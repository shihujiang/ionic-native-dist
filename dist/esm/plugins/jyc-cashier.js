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
import { Plugin, Cordova } from './plugin';
// import { Observable } from 'rxjs/Observable';
/**
 * @name JycCashier
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { JycCashier } from 'ionic-native';
 *
 * JycCashier.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
var JycCashier = (function () {
    function JycCashier() {
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    JycCashier.coolMethod = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return JycCashier;
}());
__decorate([
    Cordova()
], JycCashier, "coolMethod", null);
JycCashier = __decorate([
    Plugin({
        pluginName: 'JycCashier',
        plugin: 'jycCashierPlugin',
        pluginRef: 'cordova.plugins.jycCashierPlugin',
        platforms: ['Android', 'iOS']
    })
], JycCashier);
export { JycCashier };
//# sourceMappingURL=jyc-cashier.js.map