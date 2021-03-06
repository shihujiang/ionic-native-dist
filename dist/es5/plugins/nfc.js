"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require("./plugin");
/**
 * @name NFC
 * @description
 * The NFC plugin allows you to read and write NFC tags. You can also beam to, and receive from, other NFC enabled devices.
 *
 * Use to
 * - read data from NFC tags
 * - write data to NFC tags
 * - send data to other NFC enabled devices
 * - receive data from NFC devices
 *
 * This plugin uses NDEF (NFC Data Exchange Format) for maximum compatibilty between NFC devices, tag types, and operating systems.
 *
 * @usage
 * ```
 * import {NFC, Ndef} from 'ionic-native';
 *
 * let message = Ndef.textRecord('Hello world');
 * NFC.share([message]).then(onSuccess).catch(onError);
 *
 * ```
 */
var NFC = (function () {
    function NFC() {
    }
    /**
     * Registers an event listener for any NDEF tag.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.addNdefListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for tags matching any tag type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.addTagDiscoveredListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for NDEF tags matching a specified MIME type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.addMimeTypeListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for formatable NDEF tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.addNdefFormatableListener = function (onSuccess, onFailure) { return; };
    /**
     * Qrites an NdefMessage to a NFC tag.
     * @param message {any[]}
     * @returns {Promise<any>}
     */
    NFC.write = function (message) { return; };
    /**
     * Makes a NFC tag read only. **Warning** this is permanent.
     * @returns {Promise<any>}
     */
    NFC.makeReadyOnly = function () { return; };
    /**
     * Shares an NDEF Message via peer-to-peer.
     * @param message An array of NDEF Records.
     * @returns {Promise<any>}
     */
    NFC.share = function (message) { return; };
    /**
     * Stop sharing NDEF data via peer-to-peer.
     * @returns {Promise<any>}
     */
    NFC.unshare = function () { return; };
    /**
     * Erase a NDEF tag
     */
    NFC.erase = function () { return; };
    /**
     * Send a file to another device via NFC handover.
     * @param uris A URI as a String, or an array of URIs.
     * @returns {Promise<any>}
     */
    NFC.handover = function (uris) { return; };
    /**
     * Stop sharing NDEF data via NFC handover.
     * @returns {Promise<any>}
     */
    NFC.stopHandover = function () { return; };
    /**
     * Show the NFC settings on the device.
     * @returns {Promise<any>}
     */
    NFC.showSettings = function () { return; };
    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    NFC.enabled = function () { return; };
    /**
     * Convert bytes to string
     * @param bytes {number[]}
     * @returns {string}
     */
    NFC.bytesToString = function (bytes) { return; };
    /**
     * Convert string to bytes
     * @param str {string}
     * @returns {string}
     */
    NFC.stringToBytes = function (str) { return; };
    ;
    /**
     * Convert bytes to hex string
     * @param bytes {number[]}
     * @returns {string}
     */
    NFC.bytesToHexString = function (bytes) { return; };
    ;
    return NFC;
}());
__decorate([
    plugin_1.Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeNdefListener',
        clearWithArgs: true
    })
], NFC, "addNdefListener", null);
__decorate([
    plugin_1.Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeTagDiscoveredListener',
        clearWithArgs: true
    })
], NFC, "addTagDiscoveredListener", null);
__decorate([
    plugin_1.Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeMimeTypeListener',
        clearWithArgs: true
    })
], NFC, "addMimeTypeListener", null);
__decorate([
    plugin_1.Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3
    })
], NFC, "addNdefFormatableListener", null);
__decorate([
    plugin_1.Cordova()
], NFC, "write", null);
__decorate([
    plugin_1.Cordova()
], NFC, "makeReadyOnly", null);
__decorate([
    plugin_1.Cordova()
], NFC, "share", null);
__decorate([
    plugin_1.Cordova()
], NFC, "unshare", null);
__decorate([
    plugin_1.Cordova()
], NFC, "erase", null);
__decorate([
    plugin_1.Cordova()
], NFC, "handover", null);
__decorate([
    plugin_1.Cordova()
], NFC, "stopHandover", null);
__decorate([
    plugin_1.Cordova()
], NFC, "showSettings", null);
__decorate([
    plugin_1.Cordova()
], NFC, "enabled", null);
__decorate([
    plugin_1.Cordova({ sync: true })
], NFC, "bytesToString", null);
__decorate([
    plugin_1.Cordova({ sync: true })
], NFC, "stringToBytes", null);
__decorate([
    plugin_1.Cordova({ sync: true })
], NFC, "bytesToHexString", null);
NFC = __decorate([
    plugin_1.Plugin({
        pluginName: 'NFC',
        plugin: 'phonegap-nfc',
        pluginRef: 'nfc',
        repo: 'https://github.com/chariotsolutions/phonegap-nfc'
    })
], NFC);
exports.NFC = NFC;
/**
 * @private
 */
var Ndef = (function () {
    function Ndef() {
    }
    Ndef.uriRecord = function (uri) { return; };
    Ndef.textRecord = function (text) { return; };
    Ndef.mimeMediaRecord = function (mimeType, payload) { return; };
    Ndef.androidApplicationRecord = function (packageName) { return; };
    return Ndef;
}());
/**
 * @private
 */
Ndef.pluginName = 'NFC';
/**
 * @private
 */
Ndef.plugin = 'phonegap-nfc';
/**
 * @private
 */
Ndef.pluginRef = 'ndef';
__decorate([
    plugin_1.Cordova({ sync: true })
], Ndef, "uriRecord", null);
__decorate([
    plugin_1.Cordova({ sync: true })
], Ndef, "textRecord", null);
__decorate([
    plugin_1.Cordova({ sync: true })
], Ndef, "mimeMediaRecord", null);
__decorate([
    plugin_1.Cordova({ sync: true })
], Ndef, "androidApplicationRecord", null);
exports.Ndef = Ndef;
//# sourceMappingURL=nfc.js.map