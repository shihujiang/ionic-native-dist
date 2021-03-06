var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Cordova, Plugin } from './plugin';
/**
 * @name CardIO
 * @description
 * @usage
 * ```
 * import { CardIO } from 'ionic-native';
 *
 *
 * CardIO.canScan()
 *   .then(
 *     (res: boolean) => {
 *       if(res){
 *         let options = {
 *           requireExpiry: true,
 *           requireCCV: false,
 *           requirePostalCode: false
 *         };
 *         CardIO.scan(options);
 *       }
 *     }
 *   );
 * ```
 * @interfaces
 * CardIOOptions
 * CardIOResponse
 */
var CardIO = (function () {
    function CardIO() {
    }
    /**
     * Check whether card scanning is currently available. (May vary by
     * device, OS version, network connectivity, etc.)
     *
     * @returns {Promise<boolean>}
     */
    CardIO.canScan = function () { return; };
    /**
     * Scan a credit card with card.io.
     * @param {CardIOOptions} options Options for configuring the plugin
     * @returns {Promise<any>}
     */
    CardIO.scan = function (options) { return; };
    /**
     * Retrieve the version of the card.io library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    CardIO.version = function () { return; };
    return CardIO;
}());
__decorate([
    Cordova()
], CardIO, "canScan", null);
__decorate([
    Cordova()
], CardIO, "scan", null);
__decorate([
    Cordova()
], CardIO, "version", null);
CardIO = __decorate([
    Plugin({
        pluginName: 'CardIO',
        plugin: 'card.io.cordova.mobilesdk',
        pluginRef: 'CardIO',
        repo: 'https://github.com/card-io/card.io-Cordova-Plugin',
        platforms: ['iOS', 'Android']
    })
], CardIO);
export { CardIO };
//# sourceMappingURL=card-io.js.map