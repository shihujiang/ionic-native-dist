"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require("./plugin");
/**
 * @name SQLite
 *
 * @description
 * Access SQLite databases on the device.
 *
 * @usage
 *
 * ```typescript
 * import { SQLite } from 'ionic-native';
 *
 * // OPTION A: Use static constructor
 * SQLite.openDatabase({
 *   name: 'data.db',
 *   location: 'default'
 * })
 *   .then((db: SQLite) => {
 *
 *     db.executeSql('create table danceMoves(name VARCHAR(32))').then(() => {}).catch(() => {});
 *
 *   })
 *   .catch(error => console.error('Error opening database', error);
 *
 *
 * // OPTION B: Create a new instance of SQLite
 * let db = new SQLite();
 * db.openDatabase({
 *   name: 'data.db',
 *   location: 'default' // the location field is required
 * }).then(() => {
 *   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
 *
 *   }, (err) => {
 *     console.error('Unable to execute sql: ', err);
 *   });
 * }, (err) => {
 *   console.error('Unable to open database: ', err);
 * });
 * ```
 *
 */
var SQLite = SQLite_1 = (function () {
    function SQLite() {
    }
    SQLite.openDatabase = function (config) {
        return new SQLite_1().openDatabase(config);
    };
    /**
     * Open or create a SQLite database file.
     *
     * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     *
     * @param config the config for opening the database.
     */
    SQLite.prototype.openDatabase = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (typeof sqlitePlugin !== 'undefined') {
                sqlitePlugin.openDatabase(config, function (db) {
                    _this._objectInstance = db;
                    resolve(db);
                }, function (error) {
                    console.warn(error);
                    reject(error);
                });
            }
            else {
                plugin_1.pluginWarn({
                    pluginName: 'SQLite',
                    plugin: 'cordova-sqlite-storage'
                });
            }
        });
    };
    SQLite.prototype.addTransaction = function (transaction) { };
    /**
     * @param fn {any}
     * @returns {Promise<any>}
     */
    SQLite.prototype.transaction = function (fn) { return; };
    /**
     * @param fn {any}
     * @returns {Promise<any>}
     */
    SQLite.prototype.readTransaction = function (fn) { return; };
    SQLite.prototype.startNextTransaction = function () { };
    /**
     * @returns {Promise<any>}
     */
    SQLite.prototype.close = function () { return; };
    SQLite.prototype.start = function () { };
    /**
     * Execute SQL on the opened database. Note, you must call `openDatabase` first, and
     * ensure it resolved and successfully opened the database.
     */
    SQLite.prototype.executeSql = function (statement, params) { return; };
    /**
     * @param sql
     * @param values
     * @returns {Promise<any>}
     */
    SQLite.prototype.addStatement = function (sql, values) { return; };
    /**
     * @param sqlStatements {any}
     * @returns {Promise<any>}
     */
    SQLite.prototype.sqlBatch = function (sqlStatements) { return; };
    SQLite.prototype.abortallPendingTransactions = function () { };
    /**
     @param handler
     @param response
     */
    SQLite.prototype.handleStatementSuccess = function (handler, response) { };
    /**
     * @param handler
     * @param response
     */
    SQLite.prototype.handleStatementFailure = function (handler, response) { };
    SQLite.prototype.run = function () { };
    /**
     * @param txFailure
     */
    SQLite.prototype.abort = function (txFailure) { };
    SQLite.prototype.finish = function () { };
    /**
     * @param sqlerror
     */
    SQLite.prototype.abortFromQ = function (sqlerror) { };
    /**
     * @returns {Promise<any>}
     */
    SQLite.echoTest = function () { return; };
    /**
     * @param first
     * @returns {Promise<any>}
     */
    SQLite.deleteDatabase = function (first) { return; };
    return SQLite;
}());
__decorate([
    plugin_1.InstanceProperty
], SQLite.prototype, "databaseFeatures", void 0);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "addTransaction", null);
__decorate([
    plugin_1.CordovaInstance({
        successIndex: 2,
        errorIndex: 1
    })
], SQLite.prototype, "transaction", null);
__decorate([
    plugin_1.CordovaInstance()
], SQLite.prototype, "readTransaction", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "startNextTransaction", null);
__decorate([
    plugin_1.CordovaInstance()
], SQLite.prototype, "close", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "start", null);
__decorate([
    plugin_1.CordovaInstance()
], SQLite.prototype, "executeSql", null);
__decorate([
    plugin_1.CordovaInstance()
], SQLite.prototype, "addStatement", null);
__decorate([
    plugin_1.CordovaInstance()
], SQLite.prototype, "sqlBatch", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "abortallPendingTransactions", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "handleStatementSuccess", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "handleStatementFailure", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "run", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "abort", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "finish", null);
__decorate([
    plugin_1.CordovaInstance({
        sync: true
    })
], SQLite.prototype, "abortFromQ", null);
__decorate([
    plugin_1.Cordova()
], SQLite, "echoTest", null);
__decorate([
    plugin_1.Cordova()
], SQLite, "deleteDatabase", null);
SQLite = SQLite_1 = __decorate([
    plugin_1.Plugin({
        pluginName: 'SQLite',
        pluginRef: 'sqlitePlugin',
        plugin: 'cordova-sqlite-storage',
        repo: 'https://github.com/litehelpers/Cordova-sqlite-storage'
    })
], SQLite);
exports.SQLite = SQLite;
var SQLite_1;
//# sourceMappingURL=sqlite.js.map