"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require("./plugin");
/**
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 *
 * @usage
 * ```typescript
 * import { LocalNotifications } from 'ionic-native';
 *
 *
 * // Schedule a single notification
 * LocalNotifications.schedule({
 *   id: 1,
 *   text: 'Single ILocalNotification',
 *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * LocalNotifications.schedule([{
 *    id: 1,
 *    text: 'Multi ILocalNotification 1',
 *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: 'Local ILocalNotification Example',
 *    text: 'Multi ILocalNotification 2',
 *    icon: 'http://example.com/icon.png'
 * }]);
 *
 *
 * // Schedule delayed notification
 * LocalNotifications.schedule({
 *    text: 'Delayed ILocalNotification',
 *    at: new Date(new Date().getTime() + 3600),
 *    led: 'FF0000',
 *    sound: null
 * });
 * ```
 * @interfaces
 * ILocalNotification
 */
var LocalNotifications = (function () {
    function LocalNotifications() {
    }
    /**
     * Schedules a single or multiple notifications
     * @param options {Notification | Array<ILocalNotification>} optional
     */
    LocalNotifications.schedule = function (options) { };
    /**
     * Updates a previously scheduled notification. Must include the id in the options parameter.
     * @param options {ILocalNotification} optional
     */
    LocalNotifications.update = function (options) { };
    /**
     * Clears single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification had been cleared
     */
    LocalNotifications.clear = function (notificationId) { return; };
    /**
     * Clears all notifications
     * @returns {Promise<any>} Returns a promise when all notifications have cleared
     */
    LocalNotifications.clearAll = function () { return; };
    /**
     * Cancels single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification is canceled
     */
    LocalNotifications.cancel = function (notificationId) { return; };
    /**
     * Cancels all notifications
     * @returns {Promise<any>} Returns a promise when all notifications are canceled
     */
    LocalNotifications.cancelAll = function () { return; };
    /**
     * Checks presence of a notification
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.isPresent = function (notificationId) { return; };
    /**
     * Checks is a notification is scheduled
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.isScheduled = function (notificationId) { return; };
    /**
     * Checks if a notification is triggered
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.isTriggered = function (notificationId) { return; };
    /**
     * Get all the notification ids
     * @returns {Promise<Array<number>>}
     */
    LocalNotifications.getAllIds = function () { return; };
    /**
     * Get the ids of triggered notifications
     * @returns {Promise<Array<number>>}
     */
    LocalNotifications.getTriggeredIds = function () { return; };
    /**
     * Get the ids of scheduled notifications
     * @returns {Promise<Array<number>>} Returns a promise
     */
    LocalNotifications.getScheduledIds = function () { return; };
    /**
     * Get a notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.get = function (notificationId) { return; };
    /**
     * Get a scheduled notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.getScheduled = function (notificationId) { return; };
    /**
     * Get a triggered notification object
     * @param notificationId The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.getTriggered = function (notificationId) { return; };
    /**
     * Get all notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.getAll = function () { return; };
    /**
     * Get all scheduled notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.getAllScheduled = function () { return; };
    /**
     * Get all triggered notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.getAllTriggered = function () { return; };
    /**
     * Register permission to show notifications if not already granted.
     * @returns {Promise<boolean>}
     */
    LocalNotifications.registerPermission = function () { return; };
    /**
     * Informs if the app has the permission to show notifications.
     * @returns {Promise<boolean>}
     */
    LocalNotifications.hasPermission = function () { return; };
    /**
     * Sets a callback for a specific event
     * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
     * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
     */
    LocalNotifications.on = function (eventName, callback) { };
    return LocalNotifications;
}());
__decorate([
    plugin_1.Cordova({
        sync: true
    })
], LocalNotifications, "schedule", null);
__decorate([
    plugin_1.Cordova({
        sync: true
    })
], LocalNotifications, "update", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "clear", null);
__decorate([
    plugin_1.Cordova({
        successIndex: 0,
        errorIndex: 2
    })
], LocalNotifications, "clearAll", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "cancel", null);
__decorate([
    plugin_1.Cordova({
        successIndex: 0,
        errorIndex: 2
    })
], LocalNotifications, "cancelAll", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "isPresent", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "isScheduled", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "isTriggered", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "getAllIds", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "getTriggeredIds", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "getScheduledIds", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "get", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "getScheduled", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "getTriggered", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "getAll", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "getAllScheduled", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "getAllTriggered", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "registerPermission", null);
__decorate([
    plugin_1.Cordova()
], LocalNotifications, "hasPermission", null);
__decorate([
    plugin_1.Cordova({
        sync: true
    })
], LocalNotifications, "on", null);
LocalNotifications = __decorate([
    plugin_1.Plugin({
        pluginName: 'LocalNotifications',
        plugin: 'de.appplant.cordova.plugin.local-notification',
        pluginRef: 'cordova.plugins.notification.local',
        repo: 'https://github.com/katzer/cordova-plugin-local-notifications'
    })
], LocalNotifications);
exports.LocalNotifications = LocalNotifications;
//# sourceMappingURL=localnotifications.js.map