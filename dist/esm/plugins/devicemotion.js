var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Cordova, Plugin } from './plugin';
/**
 * @name Device Motion
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-motion`. For more info, please see the [Device Motion docs](https://github.com/apache/cordova-plugin-device-motion).
 *
 * @usage
 * ```typescript
 * import { DeviceMotion } from 'ionic-native';
 *
 *
 * // Get the device current acceleration
 * DeviceMotion.getCurrentAcceleration().then(
 *   (acceleration: AccelerationData) => console.log(acceleration),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch device acceleration
 * var subscription = DeviceMotion.watchAcceleration().subscribe((acceleration: AccelerationData) => {
 *   console.log(acceleration);
 * });
 *
 * // Stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * DeviceMotionAccelerationData
 * DeviceMotionAccelerometerOptions
 */
var DeviceMotion = (function () {
    function DeviceMotion() {
    }
    /**
     * Get the current acceleration along the x, y, and z axes.
     * @returns {Promise<DeviceMotionAccelerationData>} Returns object with x, y, z, and timestamp properties
     */
    DeviceMotion.getCurrentAcceleration = function () { return; };
    /**
     * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
     * @param {AccelerometerOptions} options list of options for the accelerometer.
     * @returns {Observable<DeviceMotionAccelerationData>} Observable returns an observable that you can subscribe to
     */
    DeviceMotion.watchAcceleration = function (options) { return; };
    return DeviceMotion;
}());
__decorate([
    Cordova()
], DeviceMotion, "getCurrentAcceleration", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse',
        observable: true,
        clearFunction: 'clearWatch'
    })
], DeviceMotion, "watchAcceleration", null);
DeviceMotion = __decorate([
    Plugin({
        pluginName: 'DeviceMotion',
        plugin: 'cordova-plugin-device-motion',
        pluginRef: 'navigator.accelerometer',
        repo: 'https://github.com/apache/cordova-plugin-device-motion'
    })
], DeviceMotion);
export { DeviceMotion };
//# sourceMappingURL=devicemotion.js.map