var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Cordova, Plugin } from './plugin';
/**
 * @name Ionic Deeplinks
 * @description This plugin handles deeplinks on iOS and Android for both custom URL scheme links
 * and Universal App Links.
 *
 * @usage
 * ```typescript
 * import { Deeplinks } from 'ionic-native';
 *
 * Deeplinks.route({
      '/about-us': AboutPage,
      '/universal-links-test': AboutPage,
      '/products/:productId': ProductPage
    }).subscribe((match) => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
    }, (nomatch) => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
 * ```
 *
 * Alternatively, if you're using Ionic 2, there's a convenience method that takes a reference to a `NavController` and handles
 * the actual navigation for you:
 *
 * ```typescript
 * Deeplinks.routeWithNavController(this.navController, {
    '/about-us': AboutPage,
    '/products/:productId': ProductPage
  }).subscribe((match) => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
    }, (nomatch) => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
 * ```
 *
 * See the [Ionic 2 Deeplinks Demo](https://github.com/driftyco/ionic2-deeplinks-demo/blob/master/app/app.ts) for an example of how to
 * retrieve the `NavController` reference at runtime.
 *
 * @interfaces
 * DeeplinkMatch
 */
var Deeplinks = (function () {
    function Deeplinks() {
    }
    /**
     * Define a set of paths to match against incoming deeplinks.
     *
     * @param {paths} Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that is called each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    Deeplinks.route = function (paths) { return; };
    /**
     *
     * This is a convenience version of `route` that takes a reference to a NavController
     * from Ionic 2, or a custom class that conforms to this protocol:
     *
     * NavController.push = function(View, Params){}
     *
     * This handler will automatically navigate when a route matches. If you need finer-grained
     * control over the behavior of a matching deeplink, use the plain `route` method.
     *
     * @param {paths} Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     *
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that resolves each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    Deeplinks.routeWithNavController = function (navController, paths) { return; };
    return Deeplinks;
}());
__decorate([
    Cordova({
        observable: true
    })
], Deeplinks, "route", null);
__decorate([
    Cordova({
        observable: true
    })
], Deeplinks, "routeWithNavController", null);
Deeplinks = __decorate([
    Plugin({
        pluginName: 'Deeplinks',
        plugin: 'ionic-plugin-deeplinks',
        pluginRef: 'IonicDeeplink',
        repo: 'https://github.com/driftyco/ionic-plugin-deeplinks',
        platforms: ['iOS', 'Android'],
        install: 'ionic plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/'
    })
], Deeplinks);
export { Deeplinks };
//# sourceMappingURL=deeplinks.js.map