var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Cordova, Plugin } from './plugin';
/**
 * @name Printer
 * @description Prints documents or HTML rendered content
 * @usage
 * ```typescript
 * import {Printer, PrintOptions} from 'ionic-native';
 *
 * Printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      printerId: 'printer007',
 *      duplex: true,
 *      landscape: true,
 *      grayscale: true
 *    };
 *
 * Printer.print(content, options).then(onSuccess, onError);
 * ```
 * @interfaces
 * PrintOptions
 */
var Printer = (function () {
    function Printer() {
    }
    /**
     * Checks whether to device is capable of printing.
     * @returns {Promise<boolean>}
     */
    Printer.isAvailable = function () { return; };
    /**
     * Sends content to the printer.
     * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param options {PrintOptions} optional. The options to pass to the printer
     * @returns {Promise<any>}
     */
    Printer.print = function (content, options) { return; };
    return Printer;
}());
__decorate([
    Cordova()
], Printer, "isAvailable", null);
__decorate([
    Cordova()
], Printer, "print", null);
Printer = __decorate([
    Plugin({
        pluginName: 'Printer',
        plugin: 'de.appplant.cordova.plugin.printer',
        pluginRef: 'cordova.plugins.printer',
        repo: 'https://github.com/katzer/cordova-plugin-printer.git',
        platforms: ['Android', 'iOS']
    })
], Printer);
export { Printer };
//# sourceMappingURL=printer.js.map