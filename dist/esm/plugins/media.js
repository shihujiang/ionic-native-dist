var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CordovaInstance, Plugin, getPlugin, pluginWarn } from './plugin';
/**
 * @name MediaPlugin
 * @description
 * @usage
 * ```typescript
 * import { MediaPlugin } from 'ionic-native';
 *
 *
 *
 * // Create a MediaPlugin instance.  Expects path to file or url as argument
 * // We can optionally pass a second argument to track the status of the media
 *
 * const onStatusUpdate = (status) => console.log(status);
 *
 * const file = new MediaPlugin('path/to/file.mp3', onStatusUpdate);
 *
 * // Catch the Success & Error Output
 * // Platform Quirks
 * // iOS calls success on completion of playback only
 * // Android calls success on completion of playback AND on release()
 * file.init.then(() => {
 *   console.log('Playback Finished');
 * }, (err) => {
 *   console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
 * });
 *
 * // play the file
 * file.play();
 *
 * // pause the file
 * file.pause();
 *
 * // get current playback position
 * file.getCurrentPosition().then((position) => {
 *   console.log(position);
 * });
 *
 * // get file duration
 * file.getDuration().then((duration) => {
 *   console.log(position);
 * });
 *
 * // skip to 10 seconds (expects int value in ms)
 * file.seekTo(10000);
 *
 * // stop playing the file
 * file.stop();
 *
 * // release the native audio resource
 * // Platform Quirks:
 * // iOS simply create a new instance and the old one will be overwritten
 * // Android you must call release() to destroy instances of media when you are done
 * file.release();
 *
 * // Recording to a file
 * var newFile = new MediaPlugin('path/to/file.mp3');
 * newFile.startRecord();
 *
 * newFile.stopRecord();
 *
 *
 *
 * ```
 */
var MediaPlugin = (function () {
    // Methods
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @param onStatusUpdate {Function} A callback function to be invoked when the status of the file changes
     */
    function MediaPlugin(src, onStatusUpdate) {
        var _this = this;
        if (!!getPlugin('Media')) {
            this.init = new Promise(function (resolve, reject) {
                _this._objectInstance = new Media(src, resolve, reject, onStatusUpdate);
            });
        }
        else {
            pluginWarn({
                pluginName: 'MediaPlugin',
                plugin: 'cordova-plugin-media'
            });
        }
    }
    /**
     * Get the current amplitude of the current recording.
     * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
     */
    MediaPlugin.prototype.getCurrentAmplitude = function () { return; };
    /**
     * Get the current position within an audio file. Also updates the Media object's position parameter.
     * @returns {Promise<any>} Returns a promise with the position of the current recording
     */
    MediaPlugin.prototype.getCurrentPosition = function () { return; };
    /**
     * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     * @returns {number} Returns a promise with the duration of the current recording
     */
    MediaPlugin.prototype.getDuration = function () { return; };
    /**
     * Starts or resumes playing an audio file.
     */
    MediaPlugin.prototype.play = function (iosOptions) { };
    /**
     * Pauses playing an audio file.
     */
    MediaPlugin.prototype.pause = function () { };
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    MediaPlugin.prototype.release = function () { };
    /**
     * Sets the current position within an audio file.
     * @param {number} milliseconds The time position you want to set for the current audio file
     */
    MediaPlugin.prototype.seekTo = function (milliseconds) { };
    /**
     * Set the volume for an audio file.
     * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    MediaPlugin.prototype.setVolume = function (volume) { };
    /**
     * Starts recording an audio file.
     */
    MediaPlugin.prototype.startRecord = function () { };
    /**
     * Stops recording
     */
    MediaPlugin.prototype.stopRecord = function () { };
    /**
     * Stops playing an audio file.
     */
    MediaPlugin.prototype.stop = function () { };
    return MediaPlugin;
}());
// Constants
/**
 * @private
 */
MediaPlugin.MEDIA_NONE = 0;
/**
 * @private
 */
MediaPlugin.MEDIA_STARTING = 1;
/**
 * @private
 */
MediaPlugin.MEDIA_RUNNING = 2;
/**
 * @private
 */
MediaPlugin.MEDIA_PAUSED = 3;
/**
 * @private
 */
MediaPlugin.MEDIA_STOPPED = 4;
// error codes
/**
 * @private
 */
MediaPlugin.MEDIA_ERR_ABORTED = 1;
/**
 * @private
 */
MediaPlugin.MEDIA_ERR_NETWORK = 2;
/**
 * @private
 */
MediaPlugin.MEDIA_ERR_DECODE = 3;
/**
 * @private
 */
MediaPlugin.MEDIA_ERR_NONE_SUPPORTED = 4;
__decorate([
    CordovaInstance()
], MediaPlugin.prototype, "getCurrentAmplitude", null);
__decorate([
    CordovaInstance()
], MediaPlugin.prototype, "getCurrentPosition", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "getDuration", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "play", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "pause", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "release", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "seekTo", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "setVolume", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "startRecord", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "stopRecord", null);
__decorate([
    CordovaInstance({
        sync: true
    })
], MediaPlugin.prototype, "stop", null);
MediaPlugin = __decorate([
    Plugin({
        pluginName: 'MediaPlugin',
        repo: 'https://github.com/apache/cordova-plugin-media',
        plugin: 'cordova-plugin-media',
        pluginRef: 'Media'
    })
], MediaPlugin);
export { MediaPlugin };
//# sourceMappingURL=media.js.map