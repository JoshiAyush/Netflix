"use strict";

import { getUid } from "../uuid.js";

export class ExtractDataFromClient {
    constructor(userAgent = null) {
        this._userAgent = userAgent || window.navigator.userAgent;
        this._report = {
            "browser": {
                "name": null,
                "version": null
            },
            "cookies": null,
            "flash": {
                "version": null
            },
            "ip": null,
            "java": {
                "version": null
            },
            "os": {
                "name": null,
                "version": null
            },
            "screen": {
                "colors": null,
                "dppx": null,
                "height": null,
                "width": null
            },
            "scripts": true,
            "userAgent": this._userAgent,
            "viewport": {
                "height": null,
                "layout": {
                    "height": null,
                    "width": null
                },
                "width": null,
                "zoom": null
            },
            "websockets": null,
            "languages": null,
            "lastRequestedAt": null
        };

        this.startReporting();
    }

    ifUserAgentMatchWith(regex) {
        return this._userAgent.match(regex);
    }

    extractBrowserNameFromUserAgent() {
        if (typeof this._userAgent != "string")
            return undefined;

        if (this._userAgent.indexOf("Trident") >= 0 || this._userAgent.indexOf("MSIE") >= 0) {
            if (this._userAgent.indexOf("Mobile") >= 0)
                this._report["browser"]["name"] = "IE Mobile";
            else
                this._report["browser"]["name"] = "Internet Explorer";
        }

        if (this._userAgent.indexOf("Firefox") >= 0 && this._userAgent.indexOf("Seamonkey") === -1) {
            if (this._userAgent.indexOf("Android") >= 0)
                this._report["browser"]["name"] = "Firefox for Android";
            else
                this._report["browser"]["name"] = "Firefox";
        }

        if (this._userAgent.indexOf("Safari") >= 0 && this._userAgent.indexOf("Chrome") === -1 && this._userAgent.indexOf("Chromium") === -1 && this._userAgent.indexOf("Android") === -1) {
            if (this._userAgent.indexOf("CriOS") >= 0)
                this._report["browser"]["name"] = "Chrome for iOS";
            else if (this._userAgent.indexOf("FxiOS") >= 0)
                this._report["browser"]["name"] = "Firefox for iOS";
            else
                this._report["browser"]["name"] = "Safari";
        }

        if (this._userAgent.indexOf("Chrome") >= 0) {
            if (this._userAgent.match(/\bChrome\/[.0-9]* Mobile\b/)) {
                if (this._userAgent.match(/\bVersion\/\d+\.\d+\b/) || this._userAgent.match(/\bwv\b/))
                    this._report["browser"]["name"] = "WebView on Android";
                else
                    this._report["browser"]["name"] = "Chrome for Android";
            } else {
                this._report["browser"]["name"] = "Chrome";
            }
        }

        if (this._userAgent.indexOf("Android") >= 0 && this._userAgent.indexOf("Chrome") === -1 && this._userAgent.indexOf("Chromium") === -1 && this._userAgent.indexOf("Trident") === -1 && this._userAgent.indexOf("Firefox") === -1)
            this._report["browser"]["name"] = "Android Browser";

        if (this._userAgent.indexOf("Edge") >= 0)
            this._report["browser"]["name"] = "Edge";

        if (this._userAgent.indexOf("UCBrowser") >= 0)
            this._report["browser"]["name"] = "UC Browser for Android";

        if (this._userAgent.indexOf("SamsungBrowser") >= 0)
            this._report["browser"]["name"] = "Samsung Internet";

        if (this._userAgent.indexOf("OPR") >= 0 || this._userAgent.indexOf("Opera") >= 0) {
            if (this._userAgent.indexOf("Opera Mini") >= 0)
                this._report["browser"]["name"] = "Opera Mini";
            else if (this._userAgent.indexOf("Opera Mobi") >= 0 || this._userAgent.indexOf("Opera Tablet") >= 0 || this._userAgent.indexOf("Mobile") >= 0)
                this._report["browser"]["name"] = "Opera Mobile";
            else
                this._report["browser"]["name"] = "Opera";
        }

        if (this._userAgent.indexOf("BB10") >= 0 || this._userAgent.indexOf("PlayBook") >= 0 || this._userAgent.indexOf("BlackBerry") >= 0)
            this._report["browser"]["name"] = "BlackBerry";

        if (this._userAgent.indexOf("MQQBrowser") >= 0)
            this._report["browser"]["name"] = "QQ Browser";
    }

    extractBrowserVersionNumberFromUserAgent() {
        if (this._report["browser"]["name"] == null)
            return;

        let _match = null;

        switch (this._report["browser"]["name"]) {
            case "Chrome":
                _match = this.ifUserAgentMatchWith(/Chrome\/((\d+\.)+\d+)/);
                break;
            case "Chrome for Android":
                _match = this.ifUserAgentMatchWith(/Chrome\/((\d+\.)+\d+)/);
                break;
            case "WebView on Android":
                _match = this.ifUserAgentMatchWith(/Chrome\/((\d+\.)+\d+)/);
                break;
            case "Firefox":
                _match = this.ifUserAgentMatchWith(/Firefox\/((\d+\.)+\d+)/);
                break;
            case "Firefox for Android":
                _match = this.ifUserAgentMatchWith(/Firefox\/((\d+\.)+\d+)/);
                break;
            case "Firefox for iOS":
                _match = this.ifUserAgentMatchWith(/FxiOS\/((\d+\.)+\d+)/);
                break;
            case "Edge":
                if (this._userAgent.indexOf("Edge") >= 0)
                    _match = this.ifUserAgentMatchWith(/Edge\/((\d+\.)+\d+)/);
                else if (this._userAgent.indexOf("rv:11") >= 0)
                    _match = this.ifUserAgentMatchWith(/rv:((\d+\.)+\d+)/);
                else if (this._userAgent.indexOf("MSIE") >= 0)
                    _match = this.ifUserAgentMatchWith(/MSIE ((\d+\.)+\d+)/);
                break;
            case "Internet Explorer":
                if (this._userAgent.indexOf("Edge") >= 0)
                    _match = this.ifUserAgentMatchWith(/Edge\/((\d+\.)+\d+)/);
                else if (this._userAgent.indexOf("rv:11") >= 0)
                    _match = this.ifUserAgentMatchWith(/rv:((\d+\.)+\d+)/);
                else if (this._userAgent.indexOf("MSIE") >= 0)
                    _match = this.ifUserAgentMatchWith(/MSIE ((\d+\.)+\d+)/);
                break;
            case "IE Mobile":
                if (this._userAgent.indexOf("Edge") >= 0)
                    _match = this.ifUserAgentMatchWith(/Edge\/((\d+\.)+\d+)/);
                else if (this._userAgent.indexOf("rv:11") >= 0)
                    _match = this.ifUserAgentMatchWith(/rv:((\d+\.)+\d+)/);
                else if (this._userAgent.indexOf("MSIE") >= 0)
                    _match = this.ifUserAgentMatchWith(/MSIE ((\d+\.)+\d+)/);
                break;
            case "Safari":
                _match = this.ifUserAgentMatchWith(/Version\/((\d+\.)+\d+)/);
                break;
            case "Android Browser":
                _match = this.ifUserAgentMatchWith(/Android ((\d+\.)+\d+)/);
                break;
            case "UC Browser for Android":
                _match = this.ifUserAgentMatchWith(/UCBrowser\/((\d+\.)+\d+)/);
                break;
            case "Samsung Internet":
                _match = this.ifUserAgentMatchWith(/SamsungBrowser\/((\d+\.)+\d+)/);
                break;
            case "Opera Mini":
                _match = this.ifUserAgentMatchWith(/Opera Mini\/((\d+\.)+\d+)/);
                break;
            case "Opera":
                if (this._userAgent.match(/OPR/))
                    _match = this.ifUserAgentMatchWith(/OPR\/((\d+\.)+\d+)/);
                else if (this._userAgent.match(/Version/))
                    _match = this.ifUserAgentMatchWith(/Version\/((\d+\.)+\d+)/);
                else
                    _match = this.ifUserAgentMatchWith(/Opera\/((\d+\.)+\d+)/);
                break;
            case "BlackBerry":
                _match = this.ifUserAgentMatchWith(/Version\/((\d+\.)+\d+)/);
                break;
            case "QQ Browser":
                _match = this.ifUserAgentMatchWith(/MQQBrowser\/((\d+\.)+\d+)/);
                break;
            default:
                _match = this.ifUserAgentMatchWith(/\/((\d+\.)+\d+)$/);
                break;
        }

        if (!(_match && _match[1]))
            return;

        this._report["browser"]["version"] = _match[1];
    }

    extractOperatingSystemNameFromUserAgent() {
        if (typeof this._userAgent != "string")
            return undefined;

        if (this._userAgent.indexOf("Windows") >= 0) {
            if (this._userAgent.indexOf("Windows Phone") >= 0)
                this._report["os"]["name"] = "Windows Phone";
            else
                this._report["os"]["name"] = "Windows";
        }

        if (this._userAgent.indexOf("OS X") >= 0 && this._userAgent.indexOf("Android") === -1)
            this._report["os"]["name"] = "OS X";

        if (this._userAgent.indexOf("Linux") >= 0)
            this._report["os"]["name"] = "Linux";

        if (this._userAgent.indexOf("like Mac OS X") >= 0)
            this._report["os"]["name"] = "iOS";

        if ((this._userAgent.indexOf("Android") >= 0 || this._userAgent.indexOf("Adr") >= 0) && this._userAgent.indexOf("Windows Phone") === -1)
            this._report["os"]["name"] = "Android";

        if (this._userAgent.indexOf("BB10") >= 0)
            this._report["os"]["name"] = "BlackBerry";

        if (this._userAgent.indexOf("RIM Tablet OS") >= 0)
            this._report["os"]["name"] = "BlackBerry Tablet OS";

        if (this._userAgent.indexOf("BlackBerry") >= 0)
            this._report["os"]["name"] = "BlackBerryOS";

        if (this._userAgent.indexOf("CrOS") >= 0)
            this._report["os"]["name"] = "Chrome OS";

        if (this._userAgent.indexOf("KAIOS") >= 0)
            this._report["os"]["name"] = "KaiOS";
    }

    reportForWindowsSystemVersion() {
        let _match = null;

        if (this._userAgent.indexOf("Win16") >= 0)
            return "3.1.1";

        if (this._userAgent.indexOf("Windows CE") >= 0)
            return "CE";

        if (this._userAgent.indexOf("Windows 95") >= 0)
            return "95";

        if (this._userAgent.indexOf("Windows 98") >= 0 && this._userAgent.indexOf("Windows 98; Win 9x 4.90") >= 0)
            return "Millennium Edition";

        if (this._userAgent.indexOf("Windows 98"))
            return "98";

        _match = this.ifUserAgentMatchWith(/Win(?:dows)?(?: Phone)?[ _]?(?:(?:NT|9x) )?((?:(\d+\.)*\d+)|XP|ME|CE)\b/)

        if (!_match)
            return;

        switch (_match[1]) {
            case "6.4":
                return "10.0";
            case "6.3":
                return "8.1";
            case "6.2":
                return "8";
            case "6.1":
                return "7";
            case "6.0":
                return "Vista";
            case "5.2":
                return "Server 2003";
            case "5.1":
                return "XP";
            case "5.01":
                return "2000 SP1";
            case "5.0":
                return "2000";
            case "4.0":
                return "4.0";
            default:
                return;
        }
    }

    extractOperatingSystemVersionNumberFromUserAgent() {
        if (this._report["os"]["name"] == null)
            return;

        let _match = null;

        switch (this._report["os"]["name"]) {
            case "Windows":
                this._report["os"]["version"] = this.reportForWindowsSystemVersion();
                break;
            case "Windows Phone":
                this._report["os"]["version"] = this.reportForWindowsSystemVersion();
                break;
            case "OS X":
                _match = this.ifUserAgentMatchWith(/OS X ((\d+[._])+\d+)\b/);
                break;
            case "Linux":
                this._report["os"]["version"] = null;
                break;
            case "iOS":
                _match = this.ifUserAgentMatchWith(/OS ((\d+[._])+\d+) like Mac OS X/);
                break;
            case "Android":
                _match = this.ifUserAgentMatchWith(/(?:Android|Adr) (\d+([._]\d+)*)/);
                break;
            case "BlackBerry":
                _match = this.ifUserAgentMatchWith(/Version\/((\d+\.)+\d+)/);
                break;
            case "BlackBerryOS":
                _match = this.ifUserAgentMatchWith(/Version\/((\d+\.)+\d+)/);
                break;
            case "BlackBerry Tablet OS":
                _match = this.ifUserAgentMatchWith(/RIM Tablet OS ((\d+\.)+\d+)/);
                break;
            case "Chrome OS":
                this._report["os"]["version"] = this._report["browser"]["version"];
                break;
            case "KaiOS":
                _match = this.ifUserAgentMatchWith(/KAIOS\/(\d+(\.\d+)*)/);
                break;
            default:
                break;
        }

        if (!(_match && _match[1]))
            return;

        /** Replace underscores in version number with periods. */
        this._report["os"]["version"] = _match[1].replace(/_/g, ".");
    }

    getMacOSXNames() {
        let versions = this._report["os"]["version"].split(".");

        if (!(versions.length >= 2))
            return this._report["os"]["name"];

        let minorVersion = parseInt(versions[1], 10);

        if (minorVersion <= 7)
            return "Mac OS X";

        if (minorVersion >= 12)
            return "macOS";

        return "OS X";
    }

    getCookieReport() {
        let _uuid = getUid();

        document.cookie = _uuid;

        if (document.cookie.indexOf(_uuid) >= 0)
            this._report["cookies"] = true;
        else
            this._report["cookies"] = false;

        document.cookie = `${_uuid}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }

    pullInPluginsInfo() {
        let _match = null;
        let plugin = null;
        let plugins = window.navigator.plugins;

        if (!plugins)
            return;

        for (let i = 0; i < plugins.length; i++) {
            plugin = plugins.item(i);

            if (plugin.name.indexOf("Flash") >= 0) {
                _match = plugin.description.match(/\b((\d+\.)+\d+)\b/);
                if (_match && _match[1])
                    this._report["flash"]["version"] = _match[1];
            }
            if (plugin.name.indexOf("Java") >= 0) {
                _match = plugin.description.match(/\b((\d+\.)+\d+)\b/);
                if (_match && _match[1])
                    this._report["java"]["version"] = _match[1];
            }
        }
    }

    pullInBrowserWindowSize() {
        this._report["viewport"]["width"] = window.innerWidth || document.documentElement.clientWidth;
        this._report["viewport"]["height"] = window.innerHeight || document.documentElement.clientHeight;
    }

    pullInViewport() {
        this._report["viewport"]["layout"]["width"] = document.documentElement.clientWidth;
        this._report["viewport"]["layout"]["height"] = document.documentElement.clientHeight;
        this._report["viewport"]["zoom"] = this._report["viewport"]["layout"]["width"] / this._report["viewport"]["width"];
    }

    pullInW3CScreenInfo() {
        this._report["screen"]["width"] = window.screen.width;
        this._report["screen"]["height"] = window.screen.height;
        this._report["screen"]["colors"] = window.screen.colorDepth;

        if (window.devicePixelRatio && !isNaN(window.devicePixelRatio)) {
            this._report["screen"]["dppx"] = window.devicePixelRatio;
            return;
        }

        this._report["screen"]["dppx"] = 1;
    }

    deprecateProperties() {
        if (!ExtractDataFromClient.testIfDefinePropertyMethodSupported())
            return;

        Object.defineProperty(this._report["browser"], "size", {
            get: function () {
                ExtractDataFromClient.warning("browser.size is deprecated; use viewport.width and viewport.height");
                return this._report["viewport"]["width"] + " x " + this._report["viewport"]["height"];
            }
        });

        Object.defineProperty(this._report["screen"], "size", {
            get: function () {
                ExtractDataFromClient.warning("screen.size is deprecated; use screen.width and screen.height");
                return this._report["screen"]["width"] + " x " + this._report["screen"]["height"];
            }
        });

        Object.defineProperty(this._report["screen"], "resolution", {
            get: function () {
                ExtractDataFromClient.warning("screen.resolution is deprecated; multiply screen.width and screen.height by screen.dppx");
                return (this._report["screen"]["dppx"] * this._report["screen"]["width"]) + " x " + (this._report["screen"]["dppx"] * this._report["screen"]["height"]);
            }
        });
    }

    startReporting() {
        this.extractBrowserNameFromUserAgent();
        this.extractBrowserVersionNumberFromUserAgent();

        this.extractOperatingSystemNameFromUserAgent();
        this.extractOperatingSystemVersionNumberFromUserAgent();

        if (this._report["os"]["name"] === "OS X" && this._report["os"]["version"])
            this._report["os"]["name"] = this.getMacOSXNames();

        this.pullInBrowserWindowSize();
        this.pullInViewport();
        this.pullInW3CScreenInfo();

        this.deprecateProperties();

        this.pullInPluginsInfo();

        /** Are websockets supported. */
        this._report["websockets"] = window.WebSocket;
        /** Preferred language(s) for displaying pages. */
        this._report["lang"] = navigator.languages || navigator.language;
        /** Report last requested at. */
        this._report["lastRequestedAt"] = (new Date()).toString();
    }

    static testIfDefinePropertyMethodSupported() {
        try {
            Object.defineProperty({}, "x", {});
        } catch (error) {
            return false;
        }

        return true;
    }

    static warning(message) {
        if (!(window.console))
            console.log(message);

        if (console.warn)
            console.warn(message);
    }
}