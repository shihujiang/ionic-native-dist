import { initAngular1 } from './ng1';
var DEVICE_READY_TIMEOUT = 2000;
import { ActionSheet } from './plugins/actionsheet';
import { AdMob } from './plugins/admob';
import { AndroidFingerprintAuth } from './plugins/android-fingerprint-auth';
import { AppAvailability } from './plugins/appavailability';
import { AppRate } from './plugins/apprate';
import { AppVersion } from './plugins/appversion';
import { Badge } from './plugins/badge';
import { BackgroundGeolocation } from './plugins/background-geolocation';
import { BackgroundMode } from './plugins/backgroundmode';
import { BarcodeScanner } from './plugins/barcodescanner';
import { Base64ToGallery } from './plugins/base64togallery';
import { BatteryStatus } from './plugins/batterystatus';
import { Brightness } from './plugins/brightness';
import { BLE } from './plugins/ble';
import { BluetoothSerial } from './plugins/bluetoothserial';
import { Calendar } from './plugins/calendar';
import { CallNumber } from './plugins/call-number';
import { Camera } from './plugins/camera';
import { CameraPreview } from './plugins/camera-preview';
import { CardIO } from './plugins/card-io';
import { Clipboard } from './plugins/clipboard';
import { CodePush } from './plugins/code-push';
import { Contacts } from './plugins/contacts';
import { Crop } from './plugins/crop';
import { DatePicker } from './plugins/datepicker';
import { DBMeter } from './plugins/dbmeter';
import { Deeplinks } from './plugins/deeplinks';
import { Device } from './plugins/device';
import { DeviceFeedback } from './plugins/device-feedback';
import { DeviceAccounts } from './plugins/deviceaccounts';
import { DeviceMotion } from './plugins/devicemotion';
import { DeviceOrientation } from './plugins/deviceorientation';
import { Diagnostic } from './plugins/diagnostic';
import { Dialogs } from './plugins/dialogs';
import { EmailComposer } from './plugins/emailcomposer';
import { EstimoteBeacons } from './plugins/estimote-beacons';
import { Facebook } from './plugins/facebook';
import { File } from './plugins/file';
import { FileChooser } from './plugins/file-chooser';
import { FileOpener } from './plugins/file-opener';
import { FilePath } from './plugins/filepath';
import { Transfer } from './plugins/filetransfer';
import { Flashlight } from './plugins/flashlight';
import { Geofence } from './plugins/geofence';
import { Geolocation } from './plugins/geolocation';
import { Globalization } from './plugins/globalization';
import { GooglePlus } from './plugins/google-plus';
import { GoogleMap } from './plugins/googlemap';
import { GoogleAnalytics } from './plugins/googleanalytics';
import { Hotspot } from './plugins/hotspot';
import { HTTP } from './plugins/http';
import { Httpd } from './plugins/httpd';
import { IBeacon } from './plugins/ibeacon';
import { ImagePicker } from './plugins/imagepicker';
import { ImageResizer } from './plugins/imageresizer';
import { InAppBrowser } from './plugins/inappbrowser';
import { InAppPurchase } from './plugins/inapppurchase';
import { Insomnia } from './plugins/insomnia';
import { Instagram } from './plugins/instagram';
import { IsDebug } from './plugins/is-debug';
import { Keyboard } from './plugins/keyboard';
import { LaunchNavigator } from './plugins/launchnavigator';
import { LocalNotifications } from './plugins/localnotifications';
import { LocationAccuracy } from './plugins/location-accuracy';
import { MediaCapture } from './plugins/media-capture';
import { NativeAudio } from './plugins/native-audio';
import { NativePageTransitions } from './plugins/native-page-transitions';
import { NativeStorage } from './plugins/nativestorage';
import { Market } from './plugins/market';
import { MediaPlugin } from './plugins/media';
import { Mixpanel } from './plugins/mixpanel';
import { MusicControls } from './plugins/music-controls';
import { Network } from './plugins/network';
import { NFC } from './plugins/nfc';
import { OneSignal } from './plugins/onesignal';
import { PhotoViewer } from './plugins/photo-viewer';
import { ScreenOrientation } from './plugins/screen-orientation';
import { PayPal } from './plugins/pay-pal';
import { PinDialog } from './plugins/pin-dialog';
import { PowerManagement } from './plugins/power-management';
import { Printer } from './plugins/printer';
import { Push } from './plugins/push';
import { SafariViewController } from './plugins/safari-view-controller';
import { Screenshot } from './plugins/screenshot';
import { SecureStorage } from './plugins/securestorage';
import { Shake } from './plugins/shake';
import { Sim } from './plugins/sim';
import { SMS } from './plugins/sms';
import { SocialSharing } from './plugins/socialsharing';
import { SpinnerDialog } from './plugins/spinnerdialog';
import { Splashscreen } from './plugins/splashscreen';
import { SQLite } from './plugins/sqlite';
import { StatusBar } from './plugins/statusbar';
import { Stepcounter } from './plugins/stepcounter';
import { StreamingMedia } from './plugins/streaming-media';
import { ThreeDeeTouch } from './plugins/3dtouch';
import { Toast } from './plugins/toast';
import { TouchID } from './plugins/touchid';
import { TextToSpeech } from './plugins/text-to-speech';
import { ThemeableBrowser } from './plugins/themeable-browser';
import { TwitterConnect } from './plugins/twitter-connect';
import { Vibration } from './plugins/vibration';
import { VideoEditor } from './plugins/video-editor';
import { VideoPlayer } from './plugins/video-player';
import { WebIntent } from './plugins/webintent';
import { YoutubeVideoPlayer } from './plugins/youtube-video-player';
import { ZBar } from './plugins/z-bar';
import { Zip } from './plugins/zip';
import { YztPlugin } from './plugins/yzt-plugin';
import { FaceRecognition } from './plugins/face-recognition';
import { Face } from './plugins/face';
import { JycCashier } from './plugins/jyc-cashier';
export * from './plugins/3dtouch';
export * from './plugins/actionsheet';
export * from './plugins/admob';
export * from './plugins/android-fingerprint-auth';
export * from './plugins/appavailability';
export * from './plugins/apprate';
export * from './plugins/appversion';
export * from './plugins/background-geolocation';
export * from './plugins/backgroundmode';
export * from './plugins/badge';
export * from './plugins/barcodescanner';
export * from './plugins/base64togallery';
export * from './plugins/batterystatus';
export * from './plugins/ble';
export * from './plugins/bluetoothserial';
export * from './plugins/brightness';
export * from './plugins/calendar';
export * from './plugins/call-number';
export * from './plugins/camera';
export * from './plugins/camera-preview';
export * from './plugins/card-io';
export * from './plugins/clipboard';
export * from './plugins/code-push';
export * from './plugins/contacts';
export * from './plugins/crop';
export * from './plugins/datepicker';
export * from './plugins/dbmeter';
export * from './plugins/deeplinks';
export * from './plugins/device';
export * from './plugins/device-feedback';
export * from './plugins/deviceaccounts';
export * from './plugins/devicemotion';
export * from './plugins/deviceorientation';
export * from './plugins/diagnostic';
export * from './plugins/dialogs';
export * from './plugins/emailcomposer';
export * from './plugins/estimote-beacons';
export * from './plugins/facebook';
export * from './plugins/file';
export * from './plugins/file-chooser';
export * from './plugins/file-opener';
export * from './plugins/filetransfer';
export * from './plugins/filepath';
export * from './plugins/flashlight';
export * from './plugins/geofence';
export * from './plugins/geolocation';
export * from './plugins/globalization';
export * from './plugins/google-plus';
export * from './plugins/googleanalytics';
export * from './plugins/googlemap';
export * from './plugins/hotspot';
export * from './plugins/http';
export * from './plugins/httpd';
export * from './plugins/ibeacon';
export * from './plugins/imagepicker';
export * from './plugins/imageresizer';
export * from './plugins/inappbrowser';
export * from './plugins/inapppurchase';
export * from './plugins/insomnia';
export * from './plugins/instagram';
export * from './plugins/is-debug';
export * from './plugins/keyboard';
export * from './plugins/launchnavigator';
export * from './plugins/localnotifications';
export * from './plugins/location-accuracy';
export * from './plugins/market';
export * from './plugins/media';
export * from './plugins/media-capture';
export * from './plugins/mixpanel';
export * from './plugins/music-controls';
export * from './plugins/native-audio';
export * from './plugins/native-page-transitions';
export * from './plugins/nativestorage';
export * from './plugins/network';
export * from './plugins/nfc';
export * from './plugins/onesignal';
export * from './plugins/pay-pal';
export * from './plugins/photo-viewer';
export * from './plugins/pin-dialog';
export * from './plugins/plugin';
export * from './plugins/power-management';
export * from './plugins/printer';
export * from './plugins/push';
export * from './plugins/safari-view-controller';
export * from './plugins/screen-orientation';
export * from './plugins/screenshot';
export * from './plugins/securestorage';
export * from './plugins/shake';
export * from './plugins/sim';
export * from './plugins/sms';
export * from './plugins/socialsharing';
export * from './plugins/spinnerdialog';
export * from './plugins/splashscreen';
export * from './plugins/sqlite';
export * from './plugins/statusbar';
export * from './plugins/stepcounter';
export * from './plugins/streaming-media';
export * from './plugins/text-to-speech';
export * from './plugins/themeable-browser';
export * from './plugins/toast';
export * from './plugins/touchid';
export * from './plugins/twitter-connect';
export * from './plugins/vibration';
export * from './plugins/video-editor';
export * from './plugins/video-player';
export * from './plugins/webintent';
export * from './plugins/youtube-video-player';
export * from './plugins/z-bar';
export * from './plugins/zip';
export * from './plugins/yzt-plugin';
export * from './plugins/face-recognition';
export * from './plugins/face';
export * from './plugins/jyc-cashier';
// Window export to use outside of a module loading system
window['IonicNative'] = {
    JycCashier: JycCashier,
    Face: Face,
    FaceRecognition: FaceRecognition,
    YztPlugin: YztPlugin,
    ActionSheet: ActionSheet,
    AdMob: AdMob,
    AndroidFingerprintAuth: AndroidFingerprintAuth,
    AppAvailability: AppAvailability,
    AppRate: AppRate,
    AppVersion: AppVersion,
    Badge: Badge,
    BackgroundGeolocation: BackgroundGeolocation,
    BackgroundMode: BackgroundMode,
    BarcodeScanner: BarcodeScanner,
    Base64ToGallery: Base64ToGallery,
    BatteryStatus: BatteryStatus,
    Brightness: Brightness,
    BLE: BLE,
    BluetoothSerial: BluetoothSerial,
    Calendar: Calendar,
    CallNumber: CallNumber,
    Camera: Camera,
    CameraPreview: CameraPreview,
    CardIO: CardIO,
    Clipboard: Clipboard,
    CodePush: CodePush,
    Contacts: Contacts,
    Crop: Crop,
    DatePicker: DatePicker,
    DBMeter: DBMeter,
    Deeplinks: Deeplinks,
    Device: Device,
    DeviceFeedback: DeviceFeedback,
    DeviceAccounts: DeviceAccounts,
    DeviceMotion: DeviceMotion,
    DeviceOrientation: DeviceOrientation,
    Dialogs: Dialogs,
    Diagnostic: Diagnostic,
    EmailComposer: EmailComposer,
    EstimoteBeacons: EstimoteBeacons,
    Facebook: Facebook,
    File: File,
    FileChooser: FileChooser,
    FileOpener: FileOpener,
    FilePath: FilePath,
    Flashlight: Flashlight,
    Geofence: Geofence,
    Geolocation: Geolocation,
    Globalization: Globalization,
    GooglePlus: GooglePlus,
    GoogleMap: GoogleMap,
    GoogleAnalytics: GoogleAnalytics,
    Hotspot: Hotspot,
    HTTP: HTTP,
    Httpd: Httpd,
    IBeacon: IBeacon,
    ImagePicker: ImagePicker,
    ImageResizer: ImageResizer,
    InAppBrowser: InAppBrowser,
    InAppPurchase: InAppPurchase,
    Insomnia: Insomnia,
    Instagram: Instagram,
    IsDebug: IsDebug,
    Keyboard: Keyboard,
    LaunchNavigator: LaunchNavigator,
    LocalNotifications: LocalNotifications,
    LocationAccuracy: LocationAccuracy,
    Market: Market,
    MediaCapture: MediaCapture,
    MediaPlugin: MediaPlugin,
    Mixpanel: Mixpanel,
    MusicControls: MusicControls,
    NativeAudio: NativeAudio,
    NativePageTransitions: NativePageTransitions,
    NativeStorage: NativeStorage,
    Network: Network,
    PayPal: PayPal,
    NFC: NFC,
    Printer: Printer,
    Push: Push,
    OneSignal: OneSignal,
    PhotoViewer: PhotoViewer,
    ScreenOrientation: ScreenOrientation,
    PinDialog: PinDialog,
    PowerManagement: PowerManagement,
    SafariViewController: SafariViewController,
    Screenshot: Screenshot,
    SecureStorage: SecureStorage,
    Shake: Shake,
    Sim: Sim,
    SMS: SMS,
    SocialSharing: SocialSharing,
    SpinnerDialog: SpinnerDialog,
    Splashscreen: Splashscreen,
    SQLite: SQLite,
    StatusBar: StatusBar,
    Stepcounter: Stepcounter,
    StreamingMedia: StreamingMedia,
    ThreeDeeTouch: ThreeDeeTouch,
    Toast: Toast,
    TouchID: TouchID,
    Transfer: Transfer,
    TextToSpeech: TextToSpeech,
    ThemeableBrowser: ThemeableBrowser,
    TwitterConnect: TwitterConnect,
    VideoEditor: VideoEditor,
    VideoPlayer: VideoPlayer,
    Vibration: Vibration,
    WebIntent: WebIntent,
    YoutubeVideoPlayer: YoutubeVideoPlayer,
    ZBar: ZBar,
    Zip: Zip
};
initAngular1(window['IonicNative']);
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