"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng1_1 = require("./ng1");
var DEVICE_READY_TIMEOUT = 2000;
var actionsheet_1 = require("./plugins/actionsheet");
var admob_1 = require("./plugins/admob");
var android_fingerprint_auth_1 = require("./plugins/android-fingerprint-auth");
var appavailability_1 = require("./plugins/appavailability");
var apprate_1 = require("./plugins/apprate");
var appversion_1 = require("./plugins/appversion");
var badge_1 = require("./plugins/badge");
var background_geolocation_1 = require("./plugins/background-geolocation");
var backgroundmode_1 = require("./plugins/backgroundmode");
var barcodescanner_1 = require("./plugins/barcodescanner");
var base64togallery_1 = require("./plugins/base64togallery");
var batterystatus_1 = require("./plugins/batterystatus");
var brightness_1 = require("./plugins/brightness");
var ble_1 = require("./plugins/ble");
var bluetoothserial_1 = require("./plugins/bluetoothserial");
var calendar_1 = require("./plugins/calendar");
var call_number_1 = require("./plugins/call-number");
var camera_1 = require("./plugins/camera");
var camera_preview_1 = require("./plugins/camera-preview");
var card_io_1 = require("./plugins/card-io");
var clipboard_1 = require("./plugins/clipboard");
var code_push_1 = require("./plugins/code-push");
var contacts_1 = require("./plugins/contacts");
var crop_1 = require("./plugins/crop");
var datepicker_1 = require("./plugins/datepicker");
var dbmeter_1 = require("./plugins/dbmeter");
var deeplinks_1 = require("./plugins/deeplinks");
var device_1 = require("./plugins/device");
var device_feedback_1 = require("./plugins/device-feedback");
var deviceaccounts_1 = require("./plugins/deviceaccounts");
var devicemotion_1 = require("./plugins/devicemotion");
var deviceorientation_1 = require("./plugins/deviceorientation");
var diagnostic_1 = require("./plugins/diagnostic");
var dialogs_1 = require("./plugins/dialogs");
var emailcomposer_1 = require("./plugins/emailcomposer");
var estimote_beacons_1 = require("./plugins/estimote-beacons");
var facebook_1 = require("./plugins/facebook");
var file_1 = require("./plugins/file");
var file_chooser_1 = require("./plugins/file-chooser");
var file_opener_1 = require("./plugins/file-opener");
var filepath_1 = require("./plugins/filepath");
var filetransfer_1 = require("./plugins/filetransfer");
var flashlight_1 = require("./plugins/flashlight");
var geofence_1 = require("./plugins/geofence");
var geolocation_1 = require("./plugins/geolocation");
var globalization_1 = require("./plugins/globalization");
var google_plus_1 = require("./plugins/google-plus");
var googlemap_1 = require("./plugins/googlemap");
var googleanalytics_1 = require("./plugins/googleanalytics");
var hotspot_1 = require("./plugins/hotspot");
var http_1 = require("./plugins/http");
var httpd_1 = require("./plugins/httpd");
var ibeacon_1 = require("./plugins/ibeacon");
var imagepicker_1 = require("./plugins/imagepicker");
var imageresizer_1 = require("./plugins/imageresizer");
var inappbrowser_1 = require("./plugins/inappbrowser");
var inapppurchase_1 = require("./plugins/inapppurchase");
var insomnia_1 = require("./plugins/insomnia");
var instagram_1 = require("./plugins/instagram");
var is_debug_1 = require("./plugins/is-debug");
var keyboard_1 = require("./plugins/keyboard");
var launchnavigator_1 = require("./plugins/launchnavigator");
var localnotifications_1 = require("./plugins/localnotifications");
var location_accuracy_1 = require("./plugins/location-accuracy");
var media_capture_1 = require("./plugins/media-capture");
var native_audio_1 = require("./plugins/native-audio");
var native_page_transitions_1 = require("./plugins/native-page-transitions");
var nativestorage_1 = require("./plugins/nativestorage");
var market_1 = require("./plugins/market");
var media_1 = require("./plugins/media");
var mixpanel_1 = require("./plugins/mixpanel");
var music_controls_1 = require("./plugins/music-controls");
var network_1 = require("./plugins/network");
var nfc_1 = require("./plugins/nfc");
var onesignal_1 = require("./plugins/onesignal");
var photo_viewer_1 = require("./plugins/photo-viewer");
var screen_orientation_1 = require("./plugins/screen-orientation");
var pay_pal_1 = require("./plugins/pay-pal");
var pin_dialog_1 = require("./plugins/pin-dialog");
var power_management_1 = require("./plugins/power-management");
var printer_1 = require("./plugins/printer");
var push_1 = require("./plugins/push");
var safari_view_controller_1 = require("./plugins/safari-view-controller");
var screenshot_1 = require("./plugins/screenshot");
var securestorage_1 = require("./plugins/securestorage");
var shake_1 = require("./plugins/shake");
var sim_1 = require("./plugins/sim");
var sms_1 = require("./plugins/sms");
var socialsharing_1 = require("./plugins/socialsharing");
var spinnerdialog_1 = require("./plugins/spinnerdialog");
var splashscreen_1 = require("./plugins/splashscreen");
var sqlite_1 = require("./plugins/sqlite");
var statusbar_1 = require("./plugins/statusbar");
var stepcounter_1 = require("./plugins/stepcounter");
var streaming_media_1 = require("./plugins/streaming-media");
var _3dtouch_1 = require("./plugins/3dtouch");
var toast_1 = require("./plugins/toast");
var touchid_1 = require("./plugins/touchid");
var text_to_speech_1 = require("./plugins/text-to-speech");
var themeable_browser_1 = require("./plugins/themeable-browser");
var twitter_connect_1 = require("./plugins/twitter-connect");
var vibration_1 = require("./plugins/vibration");
var video_editor_1 = require("./plugins/video-editor");
var video_player_1 = require("./plugins/video-player");
var webintent_1 = require("./plugins/webintent");
var youtube_video_player_1 = require("./plugins/youtube-video-player");
var z_bar_1 = require("./plugins/z-bar");
var zip_1 = require("./plugins/zip");
var yzt_plugin_1 = require("./plugins/yzt-plugin");
var face_recognition_1 = require("./plugins/face-recognition");
var face_1 = require("./plugins/face");
var jyc_cashier_1 = require("./plugins/jyc-cashier");
__export(require("./plugins/3dtouch"));
__export(require("./plugins/actionsheet"));
__export(require("./plugins/admob"));
__export(require("./plugins/android-fingerprint-auth"));
__export(require("./plugins/appavailability"));
__export(require("./plugins/apprate"));
__export(require("./plugins/appversion"));
__export(require("./plugins/background-geolocation"));
__export(require("./plugins/backgroundmode"));
__export(require("./plugins/badge"));
__export(require("./plugins/barcodescanner"));
__export(require("./plugins/base64togallery"));
__export(require("./plugins/batterystatus"));
__export(require("./plugins/ble"));
__export(require("./plugins/bluetoothserial"));
__export(require("./plugins/brightness"));
__export(require("./plugins/calendar"));
__export(require("./plugins/call-number"));
__export(require("./plugins/camera"));
__export(require("./plugins/camera-preview"));
__export(require("./plugins/card-io"));
__export(require("./plugins/clipboard"));
__export(require("./plugins/code-push"));
__export(require("./plugins/contacts"));
__export(require("./plugins/crop"));
__export(require("./plugins/datepicker"));
__export(require("./plugins/dbmeter"));
__export(require("./plugins/deeplinks"));
__export(require("./plugins/device"));
__export(require("./plugins/device-feedback"));
__export(require("./plugins/deviceaccounts"));
__export(require("./plugins/devicemotion"));
__export(require("./plugins/deviceorientation"));
__export(require("./plugins/diagnostic"));
__export(require("./plugins/dialogs"));
__export(require("./plugins/emailcomposer"));
__export(require("./plugins/estimote-beacons"));
__export(require("./plugins/facebook"));
__export(require("./plugins/file"));
__export(require("./plugins/file-chooser"));
__export(require("./plugins/file-opener"));
__export(require("./plugins/filetransfer"));
__export(require("./plugins/filepath"));
__export(require("./plugins/flashlight"));
__export(require("./plugins/geofence"));
__export(require("./plugins/geolocation"));
__export(require("./plugins/globalization"));
__export(require("./plugins/google-plus"));
__export(require("./plugins/googleanalytics"));
__export(require("./plugins/googlemap"));
__export(require("./plugins/hotspot"));
__export(require("./plugins/http"));
__export(require("./plugins/httpd"));
__export(require("./plugins/ibeacon"));
__export(require("./plugins/imagepicker"));
__export(require("./plugins/imageresizer"));
__export(require("./plugins/inappbrowser"));
__export(require("./plugins/inapppurchase"));
__export(require("./plugins/insomnia"));
__export(require("./plugins/instagram"));
__export(require("./plugins/is-debug"));
__export(require("./plugins/keyboard"));
__export(require("./plugins/launchnavigator"));
__export(require("./plugins/localnotifications"));
__export(require("./plugins/location-accuracy"));
__export(require("./plugins/market"));
__export(require("./plugins/media"));
__export(require("./plugins/media-capture"));
__export(require("./plugins/mixpanel"));
__export(require("./plugins/music-controls"));
__export(require("./plugins/native-audio"));
__export(require("./plugins/native-page-transitions"));
__export(require("./plugins/nativestorage"));
__export(require("./plugins/network"));
__export(require("./plugins/nfc"));
__export(require("./plugins/onesignal"));
__export(require("./plugins/pay-pal"));
__export(require("./plugins/photo-viewer"));
__export(require("./plugins/pin-dialog"));
__export(require("./plugins/plugin"));
__export(require("./plugins/power-management"));
__export(require("./plugins/printer"));
__export(require("./plugins/push"));
__export(require("./plugins/safari-view-controller"));
__export(require("./plugins/screen-orientation"));
__export(require("./plugins/screenshot"));
__export(require("./plugins/securestorage"));
__export(require("./plugins/shake"));
__export(require("./plugins/sim"));
__export(require("./plugins/sms"));
__export(require("./plugins/socialsharing"));
__export(require("./plugins/spinnerdialog"));
__export(require("./plugins/splashscreen"));
__export(require("./plugins/sqlite"));
__export(require("./plugins/statusbar"));
__export(require("./plugins/stepcounter"));
__export(require("./plugins/streaming-media"));
__export(require("./plugins/text-to-speech"));
__export(require("./plugins/themeable-browser"));
__export(require("./plugins/toast"));
__export(require("./plugins/touchid"));
__export(require("./plugins/twitter-connect"));
__export(require("./plugins/vibration"));
__export(require("./plugins/video-editor"));
__export(require("./plugins/video-player"));
__export(require("./plugins/webintent"));
__export(require("./plugins/youtube-video-player"));
__export(require("./plugins/z-bar"));
__export(require("./plugins/zip"));
__export(require("./plugins/yzt-plugin"));
__export(require("./plugins/face-recognition"));
__export(require("./plugins/face"));
__export(require("./plugins/jyc-cashier"));
// Window export to use outside of a module loading system
window['IonicNative'] = {
    JycCashier: jyc_cashier_1.JycCashier,
    Face: face_1.Face,
    FaceRecognition: face_recognition_1.FaceRecognition,
    YztPlugin: yzt_plugin_1.YztPlugin,
    ActionSheet: actionsheet_1.ActionSheet,
    AdMob: admob_1.AdMob,
    AndroidFingerprintAuth: android_fingerprint_auth_1.AndroidFingerprintAuth,
    AppAvailability: appavailability_1.AppAvailability,
    AppRate: apprate_1.AppRate,
    AppVersion: appversion_1.AppVersion,
    Badge: badge_1.Badge,
    BackgroundGeolocation: background_geolocation_1.BackgroundGeolocation,
    BackgroundMode: backgroundmode_1.BackgroundMode,
    BarcodeScanner: barcodescanner_1.BarcodeScanner,
    Base64ToGallery: base64togallery_1.Base64ToGallery,
    BatteryStatus: batterystatus_1.BatteryStatus,
    Brightness: brightness_1.Brightness,
    BLE: ble_1.BLE,
    BluetoothSerial: bluetoothserial_1.BluetoothSerial,
    Calendar: calendar_1.Calendar,
    CallNumber: call_number_1.CallNumber,
    Camera: camera_1.Camera,
    CameraPreview: camera_preview_1.CameraPreview,
    CardIO: card_io_1.CardIO,
    Clipboard: clipboard_1.Clipboard,
    CodePush: code_push_1.CodePush,
    Contacts: contacts_1.Contacts,
    Crop: crop_1.Crop,
    DatePicker: datepicker_1.DatePicker,
    DBMeter: dbmeter_1.DBMeter,
    Deeplinks: deeplinks_1.Deeplinks,
    Device: device_1.Device,
    DeviceFeedback: device_feedback_1.DeviceFeedback,
    DeviceAccounts: deviceaccounts_1.DeviceAccounts,
    DeviceMotion: devicemotion_1.DeviceMotion,
    DeviceOrientation: deviceorientation_1.DeviceOrientation,
    Dialogs: dialogs_1.Dialogs,
    Diagnostic: diagnostic_1.Diagnostic,
    EmailComposer: emailcomposer_1.EmailComposer,
    EstimoteBeacons: estimote_beacons_1.EstimoteBeacons,
    Facebook: facebook_1.Facebook,
    File: file_1.File,
    FileChooser: file_chooser_1.FileChooser,
    FileOpener: file_opener_1.FileOpener,
    FilePath: filepath_1.FilePath,
    Flashlight: flashlight_1.Flashlight,
    Geofence: geofence_1.Geofence,
    Geolocation: geolocation_1.Geolocation,
    Globalization: globalization_1.Globalization,
    GooglePlus: google_plus_1.GooglePlus,
    GoogleMap: googlemap_1.GoogleMap,
    GoogleAnalytics: googleanalytics_1.GoogleAnalytics,
    Hotspot: hotspot_1.Hotspot,
    HTTP: http_1.HTTP,
    Httpd: httpd_1.Httpd,
    IBeacon: ibeacon_1.IBeacon,
    ImagePicker: imagepicker_1.ImagePicker,
    ImageResizer: imageresizer_1.ImageResizer,
    InAppBrowser: inappbrowser_1.InAppBrowser,
    InAppPurchase: inapppurchase_1.InAppPurchase,
    Insomnia: insomnia_1.Insomnia,
    Instagram: instagram_1.Instagram,
    IsDebug: is_debug_1.IsDebug,
    Keyboard: keyboard_1.Keyboard,
    LaunchNavigator: launchnavigator_1.LaunchNavigator,
    LocalNotifications: localnotifications_1.LocalNotifications,
    LocationAccuracy: location_accuracy_1.LocationAccuracy,
    Market: market_1.Market,
    MediaCapture: media_capture_1.MediaCapture,
    MediaPlugin: media_1.MediaPlugin,
    Mixpanel: mixpanel_1.Mixpanel,
    MusicControls: music_controls_1.MusicControls,
    NativeAudio: native_audio_1.NativeAudio,
    NativePageTransitions: native_page_transitions_1.NativePageTransitions,
    NativeStorage: nativestorage_1.NativeStorage,
    Network: network_1.Network,
    PayPal: pay_pal_1.PayPal,
    NFC: nfc_1.NFC,
    Printer: printer_1.Printer,
    Push: push_1.Push,
    OneSignal: onesignal_1.OneSignal,
    PhotoViewer: photo_viewer_1.PhotoViewer,
    ScreenOrientation: screen_orientation_1.ScreenOrientation,
    PinDialog: pin_dialog_1.PinDialog,
    PowerManagement: power_management_1.PowerManagement,
    SafariViewController: safari_view_controller_1.SafariViewController,
    Screenshot: screenshot_1.Screenshot,
    SecureStorage: securestorage_1.SecureStorage,
    Shake: shake_1.Shake,
    Sim: sim_1.Sim,
    SMS: sms_1.SMS,
    SocialSharing: socialsharing_1.SocialSharing,
    SpinnerDialog: spinnerdialog_1.SpinnerDialog,
    Splashscreen: splashscreen_1.Splashscreen,
    SQLite: sqlite_1.SQLite,
    StatusBar: statusbar_1.StatusBar,
    Stepcounter: stepcounter_1.Stepcounter,
    StreamingMedia: streaming_media_1.StreamingMedia,
    ThreeDeeTouch: _3dtouch_1.ThreeDeeTouch,
    Toast: toast_1.Toast,
    TouchID: touchid_1.TouchID,
    Transfer: filetransfer_1.Transfer,
    TextToSpeech: text_to_speech_1.TextToSpeech,
    ThemeableBrowser: themeable_browser_1.ThemeableBrowser,
    TwitterConnect: twitter_connect_1.TwitterConnect,
    VideoEditor: video_editor_1.VideoEditor,
    VideoPlayer: video_player_1.VideoPlayer,
    Vibration: vibration_1.Vibration,
    WebIntent: webintent_1.WebIntent,
    YoutubeVideoPlayer: youtube_video_player_1.YoutubeVideoPlayer,
    ZBar: z_bar_1.ZBar,
    Zip: zip_1.Zip
};
ng1_1.initAngular1(window['IonicNative']);
// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
var before = Date.now();
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (Date.now() - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn("Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
    }
}, DEVICE_READY_TIMEOUT);
//# sourceMappingURL=index.js.map