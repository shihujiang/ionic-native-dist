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
export declare class SQLite {
    private _objectInstance;
    databaseFeatures: any;
    constructor();
    static openDatabase(config: any): Promise<SQLite>;
    /**
     * Open or create a SQLite database file.
     *
     * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     *
     * @param config the config for opening the database.
     */
    openDatabase(config: any): Promise<any>;
    addTransaction(transaction: any): void;
    /**
     * @param fn {any}
     * @returns {Promise<any>}
     */
    transaction(fn: any): Promise<any>;
    /**
     * @param fn {any}
     * @returns {Promise<any>}
     */
    readTransaction(fn: any): Promise<any>;
    startNextTransaction(): void;
    /**
     * @returns {Promise<any>}
     */
    close(): Promise<any>;
    start(): void;
    /**
     * Execute SQL on the opened database. Note, you must call `openDatabase` first, and
     * ensure it resolved and successfully opened the database.
     */
    executeSql(statement: string, params: any): Promise<any>;
    /**
     * @param sql
     * @param values
     * @returns {Promise<any>}
     */
    addStatement(sql: any, values: any): Promise<any>;
    /**
     * @param sqlStatements {any}
     * @returns {Promise<any>}
     */
    sqlBatch(sqlStatements: any): Promise<any>;
    abortallPendingTransactions(): void;
    /**
     @param handler
     @param response
     */
    handleStatementSuccess(handler: any, response: any): void;
    /**
     * @param handler
     * @param response
     */
    handleStatementFailure(handler: any, response: any): void;
    run(): void;
    /**
     * @param txFailure
     */
    abort(txFailure: any): void;
    finish(): void;
    /**
     * @param sqlerror
     */
    abortFromQ(sqlerror: any): void;
    /**
     * @returns {Promise<any>}
     */
    static echoTest(): Promise<any>;
    /**
     * @param first
     * @returns {Promise<any>}
     */
    static deleteDatabase(first: any): Promise<any>;
}
