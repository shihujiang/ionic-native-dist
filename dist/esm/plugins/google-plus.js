var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Cordova, Plugin } from './plugin';
/**
 * @name Google Plus
 * @description
 * @usage
 * ```typescript
 * import { GooglePlus } from 'ionic-native';
 *
 *
 * ```
 */
var GooglePlus = (function () {
    function GooglePlus() {
    }
    /**
     * The login function walks the user through the Google Auth process.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.login = function (options) { return; };
    /**
     * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.trySilentLogin = function (options) { return; };
    /**
     * This will clear the OAuth2 token.
     * @returns {Promise<any>}
     */
    GooglePlus.logout = function () { return; };
    /**
     * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
     * @returns {Promise<any>}
     */
    GooglePlus.disconnect = function () { return; };
    return GooglePlus;
}());
__decorate([
    Cordova()
], GooglePlus, "login", null);
__decorate([
    Cordova()
], GooglePlus, "trySilentLogin", null);
__decorate([
    Cordova()
], GooglePlus, "logout", null);
__decorate([
    Cordova()
], GooglePlus, "disconnect", null);
GooglePlus = __decorate([
    Plugin({
        pluginName: 'GooglePlus',
        plugin: 'cordova-plugin-googleplus',
        pluginRef: 'window.plugins.googleplus',
        repo: 'https://github.com/EddyVerbruggen/cordova-plugin-googleplus',
        platforms: ['Web', 'Android', 'iOS'],
        install: 'ionic plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid'
    })
], GooglePlus);
export { GooglePlus };
//# sourceMappingURL=google-plus.js.map