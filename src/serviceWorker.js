/**
 * * This optional code is used to register a service worker. register() is not called by default.
 * 
 * * A service worker is a script that your browser runs in the background, separate from a web page, 
 * * opening the door to features that don't need a web page or user interaction. Today, they already 
 * * include features like push notifications and background sync.
 * 
 * * This lets the app load faster on subsequent visits in production, and gives it offline capabilities. 
 * * However, it also means that developers (and users) will only see deployed updates on subsequent visits 
 * * to a page, after all the existing tabs open on the page have been closed, since previously cached
 * * resources are updated in the background.
 * 
 * * To learn more about the benefits of this model and instructions on how to opt-in, 
 * * @see https://bit.ly/CRA-PWA
 * 
 * * By the way if you want to know more about service workers go check out developers.google.com, 
 * * @see https://developers.google.com/web/fundamentals/primers/service-workers
 */

function isLocalhost() {
    /**
     * @function isLocalhost() checks if the web app hosted location is in the local server.
     * 
     * @return {Bool} true if found the hosting server local. 
     */
    return (window.location.hostname === "localhost") ? true : false;
}

function isHosted() {
    /**
     * @function isHosted() checks if the web app hosted location is in a web server.
     * 
     * @return {Bool} true if found the hosting server a web server. 
     */
    return (window.location.hostname === "[::1]") ? true : false;
}

function checkIfHosted() {
    /**
     * @function checkIfHosted() checks if the web app hosted location is in a web server.
     * 
     * This function also does the same job as the function isHosted() do but here it matches
     * the client hostname with a regex (regular expression) to find if it is a valid hostaname
     * and returns true if found a valid one otherwise returns false.
     * 
     * @return {Bool} true if found a valid hostname.
     */
    return (window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)) ? true : false;
}

const IsLocalhost = Boolean(isLocalhost() || isHosted() || checkIfHosted());

export function register(config) {
    /**
     * @function register()
     * 
     * @argument {Object} config
     */
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

        if (publicUrl.origin !== window.location.origin) return false;

        window.addEventListener('load', () => {
            const serviceWorkerUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (IsLocalhost) {
                checkValidServiceWorker(serviceWorkerUrl, config);

                navigator.serviceWorker.ready.then(() => {
                    console.log("This web app is being served cache-first by a service worker.");
                    console.log("To learn more, visit https://bit.ly/CRA-PWA");
                });
            } else {
                registerValidServiceWorker(serviceWorkerUrl, config);
            }
        });
    }
}

function registerValidServiceWorker(serviceWorkerUrl, config) {
    /**
     * @function registerValidServiceWorker()
     */
    navigator.serviceWorker.register(serviceWorkerUrl).then(registration => {
        registration.onupdatefound = function () {
            const installingWorker = registration.installing;

            if (installingWorker == null) return false;

            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        console.log("New content is available and will be used when all tabs for this page are closed.");
                        console.log("See https://bit.ly/CRA-PWA.");

                        if (config && config.onUpdate) config.onUpdate(registration);
                    } else {
                        console.log("Content is cached for offline use.");

                        if (config && config.onSuccess) config.onSuccess(registration);
                    }
                }
            };
        };
    }).catch(error => {
        console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(serviceWorkerUrl, config) {
    /**
     * 
     */
    fetch(serviceWorkerUrl, {
        headers: { 'Service-Worker': 'script' },
    }).then(response => {
        const contentType = response.headers.get('content-type');
        if (response.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) {
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        } else {
            registerValidServiceWorker(serviceWorkerUrl, config);
        }
    }).catch(() => {
        console.log("No internet connection found. App is running in offline mode.");
    });
}

export function unregister() {
    /**
     * @function unregister() unregisters the registered service worker for your web app. 
     */
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        }).catch(error => {
            console.error(error.message);
        });
    }
}
