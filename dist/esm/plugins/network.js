var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Cordova, CordovaProperty, Plugin, CordovaFunctionOverride } from './plugin';
/**
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```typescript
 * import { Network } from 'ionic-native';
 *
 * // watch network for a disconnect
 * let disconnectSubscription = Network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-(');
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = Network.onConnect().subscribe(() => {
 *   console.log('network connected!');

 *   // We just got a connection but we need to wait briefly
 *
   // before we determine the connection type.  Might need to wait

 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (Network.type === 'wifi') {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 * @advanced
 * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
 */
var Network = (function () {
    function Network() {
    }
    /**
     * Returns an observable to watch connection changes
     * @return {Observable<any>}
     */
    Network.onchange = function () { return; };
    /**
     * Returns an observable to watch connection type changes
     * @return {Observable<any>}
     */
    Network.ontypechange = function () { return; };
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    Network.onDisconnect = function () { return; };
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    Network.onConnect = function () { return; };
    return Network;
}());
__decorate([
    CordovaProperty
], Network, "type", void 0);
__decorate([
    CordovaProperty
], Network, "downlinkMax", void 0);
__decorate([
    CordovaFunctionOverride()
], Network, "onchange", null);
__decorate([
    CordovaFunctionOverride()
], Network, "ontypechange", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'offline'
    })
], Network, "onDisconnect", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'online'
    })
], Network, "onConnect", null);
Network = __decorate([
    Plugin({
        pluginName: 'Network',
        plugin: 'cordova-plugin-network-information',
        repo: 'https://github.com/apache/cordova-plugin-network-information',
        platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser'],
        pluginRef: 'navigator.connection'
    })
], Network);
export { Network };
//# sourceMappingURL=network.js.map