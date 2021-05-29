"use strict";

import { getUid } from "../utils/uuid.js";
import { consoleLog } from "../console/messages.js";
import { consoleWarn } from "../console/messages.js";
import { consoleMessagesEnabled } from "../console/messages.js";

export class ExtractDataFromClient {
  constructor(userAgent = "") {
    /**
     * @constructor ExtractDataFromClient to initialise data variables that are to be reported.
     * @argument {String} userAgent.
     * @returns {ExtractDataFromClient} object.
     */
    this._userAgent = userAgent || window.navigator.userAgent;
    this._report = {
      browser: {
        name: null,
        version: null
      },
      cookies: null,
      flash: {
        version: null
      },
      ip: null,
      java: {
        version: null
      },
      os: {
        name: null,
        version: null
      },
      screen: {
        colors: null,
        dppx: null,
        height: null,
        width: null
      },
      scripts: true,
      userAgent: this._userAgent,
      viewport: {
        height: null,
        layout: {
          height: null,
          width: null
        },
        width: null,
        zoom: null
      },
      websockets: null,
      languages: null,
      lastRequestedAt: null
    };
  }

  matchUserAgent(regex) {
    /**
     * @method matchUserAgent is to match the string user agent with some regular expression.
     * @argument {RegExp} regex to match the string with.
     * @returns {Array} match.
     */
    return this._userAgent.match(regex);
  }

  extractBrowserNameFromUserAgent() {
    if (typeof this._userAgent != "string") return undefined;

    if (
      this._userAgent.indexOf("Trident") >= 0 ||
      this._userAgent.indexOf("MSIE") >= 0
    ) {
      if (this._userAgent.indexOf("Mobile") >= 0) return "IE Mobile";

      return "Internet Explorer";
    }

    if (
      this._userAgent.indexOf("Firefox") >= 0 &&
      this._userAgent.indexOf("Seamonkey") === -1
    ) {
      if (this._userAgent.indexOf("Android") >= 0) return "Firefox for Android";

      return "Firefox";
    }

    if (
      this._userAgent.indexOf("Safari") >= 0 &&
      this._userAgent.indexOf("Chrome") === -1 &&
      this._userAgent.indexOf("Chromium") === -1 &&
      this._userAgent.indexOf("Android") === -1
    ) {
      if (this._userAgent.indexOf("CriOS") >= 0) return "Chrome for iOS";

      if (this._userAgent.indexOf("FxiOS") >= 0) return "Firefox for iOS";

      return "Safari";
    }

    if (this._userAgent.indexOf("Chrome") >= 0) {
      if (this._userAgent.match(/\bChrome\/[.0-9]* Mobile\b/)) {
        if (
          this._userAgent.match(/\bVersion\/\d+\.\d+\b/) ||
          this._userAgent.match(/\bwv\b/)
        )
          return "WebView on Android";

        return "Chrome for Android";
      }

      return "Chrome";
    }

    if (
      this._userAgent.indexOf("Android") >= 0 &&
      this._userAgent.indexOf("Chrome") === -1 &&
      this._userAgent.indexOf("Chromium") === -1 &&
      this._userAgent.indexOf("Trident") === -1 &&
      this._userAgent.indexOf("Firefox") === -1
    )
      return "Android Browser";

    if (this._userAgent.indexOf("Edge") >= 0) return "Edge";

    if (this._userAgent.indexOf("UCBrowser") >= 0)
      return "UC Browser for Android";

    if (this._userAgent.indexOf("SamsungBrowser") >= 0)
      return "Samsung Internet";

    if (
      this._userAgent.indexOf("OPR") >= 0 ||
      this._userAgent.indexOf("Opera") >= 0
    ) {
      if (this._userAgent.indexOf("Opera Mini") >= 0) return "Opera Mini";

      if (
        this._userAgent.indexOf("Opera Mobi") >= 0 ||
        this._userAgent.indexOf("Opera Tablet") >= 0 ||
        this._userAgent.indexOf("Mobile") >= 0
      )
        return "Opera Mobile";

      return "Opera";
    }

    if (
      this._userAgent.indexOf("BB10") >= 0 ||
      this._userAgent.indexOf("PlayBook") >= 0 ||
      this._userAgent.indexOf("BlackBerry") >= 0
    )
      return "BlackBerry";

    if (this._userAgent.indexOf("MQQBrowser") >= 0) return "QQ Browser";
  }

  extractBrowserVersionNumberFromUserAgent() {
    if (this._report["browser"]["name"] == null) return;

    let _match = null;

    switch (this._report["browser"]["name"]) {
      case "Chrome":
        _match = this.matchUserAgent(/Chrome\/((\d+\.)+\d+)/);
        break;
      case "Chrome for Android":
        _match = this.matchUserAgent(/Chrome\/((\d+\.)+\d+)/);
        break;
      case "WebView on Android":
        _match = this.matchUserAgent(/Chrome\/((\d+\.)+\d+)/);
        break;
      case "Firefox":
        _match = this.matchUserAgent(/Firefox\/((\d+\.)+\d+)/);
        break;
      case "Firefox for Android":
        _match = this.matchUserAgent(/Firefox\/((\d+\.)+\d+)/);
        break;
      case "Firefox for iOS":
        _match = this.matchUserAgent(/FxiOS\/((\d+\.)+\d+)/);
        break;
      case "Edge":
        if (this._userAgent.indexOf("Edge") >= 0)
          _match = this.matchUserAgent(/Edge\/((\d+\.)+\d+)/);
        else if (this._userAgent.indexOf("rv:11") >= 0)
          _match = this.matchUserAgent(/rv:((\d+\.)+\d+)/);
        else if (this._userAgent.indexOf("MSIE") >= 0)
          _match = this.matchUserAgent(/MSIE ((\d+\.)+\d+)/);
        break;
      case "Internet Explorer":
        if (this._userAgent.indexOf("Edge") >= 0)
          _match = this.matchUserAgent(/Edge\/((\d+\.)+\d+)/);
        else if (this._userAgent.indexOf("rv:11") >= 0)
          _match = this.matchUserAgent(/rv:((\d+\.)+\d+)/);
        else if (this._userAgent.indexOf("MSIE") >= 0)
          _match = this.matchUserAgent(/MSIE ((\d+\.)+\d+)/);
        break;
      case "IE Mobile":
        if (this._userAgent.indexOf("Edge") >= 0)
          _match = this.matchUserAgent(/Edge\/((\d+\.)+\d+)/);
        else if (this._userAgent.indexOf("rv:11") >= 0)
          _match = this.matchUserAgent(/rv:((\d+\.)+\d+)/);
        else if (this._userAgent.indexOf("MSIE") >= 0)
          _match = this.matchUserAgent(/MSIE ((\d+\.)+\d+)/);
        break;
      case "Safari":
        _match = this.matchUserAgent(/Version\/((\d+\.)+\d+)/);
        break;
      case "Android Browser":
        _match = this.matchUserAgent(/Android ((\d+\.)+\d+)/);
        break;
      case "UC Browser for Android":
        _match = this.matchUserAgent(/UCBrowser\/((\d+\.)+\d+)/);
        break;
      case "Samsung Internet":
        _match = this.matchUserAgent(/SamsungBrowser\/((\d+\.)+\d+)/);
        break;
      case "Opera Mini":
        _match = this.matchUserAgent(/Opera Mini\/((\d+\.)+\d+)/);
        break;
      case "Opera":
        if (this._userAgent.match(/OPR/))
          _match = this.matchUserAgent(/OPR\/((\d+\.)+\d+)/);
        else if (this._userAgent.match(/Version/))
          _match = this.matchUserAgent(/Version\/((\d+\.)+\d+)/);
        else _match = this.matchUserAgent(/Opera\/((\d+\.)+\d+)/);
        break;
      case "BlackBerry":
        _match = this.matchUserAgent(/Version\/((\d+\.)+\d+)/);
        break;
      case "QQ Browser":
        _match = this.matchUserAgent(/MQQBrowser\/((\d+\.)+\d+)/);
        break;
      default:
        _match = this.matchUserAgent(/\/((\d+\.)+\d+)$/);
        break;
    }

    if (!(_match && _match[1])) return;

    return _match[1];
  }

  extractOperatingSystemNameFromUserAgent() {
    if (typeof this._userAgent != "string") return undefined;

    if (this._userAgent.indexOf("Windows") >= 0) {
      if (this._userAgent.indexOf("Windows Phone") >= 0) return "Windows Phone";

      return "Windows";
    }

    if (
      this._userAgent.indexOf("OS X") >= 0 &&
      this._userAgent.indexOf("Android") === -1
    )
      return "OS X";

    if (this._userAgent.indexOf("Linux") >= 0) return "Linux";

    if (this._userAgent.indexOf("like Mac OS X") >= 0) return "iOS";

    if (
      (this._userAgent.indexOf("Android") >= 0 ||
        this._userAgent.indexOf("Adr") >= 0) &&
      this._userAgent.indexOf("Windows Phone") === -1
    )
      return "Android";

    if (this._userAgent.indexOf("BB10") >= 0) return "BlackBerry";

    if (this._userAgent.indexOf("RIM Tablet OS") >= 0)
      return "BlackBerry Tablet OS";

    if (this._userAgent.indexOf("BlackBerry") >= 0) return "BlackBerryOS";

    if (this._userAgent.indexOf("CrOS") >= 0) return "Chrome OS";

    if (this._userAgent.indexOf("KAIOS") >= 0) return "KaiOS";
  }

  reportForWindowsSystemVersion() {
    let _match = null;

    if (this._userAgent.indexOf("Win16") >= 0) return "3.1.1";

    if (this._userAgent.indexOf("Windows CE") >= 0) return "CE";

    if (this._userAgent.indexOf("Windows 95") >= 0) return "95";

    if (
      this._userAgent.indexOf("Windows 98") >= 0 &&
      this._userAgent.indexOf("Windows 98; Win 9x 4.90") >= 0
    )
      return "Millennium Edition";

    if (this._userAgent.indexOf("Windows 98")) return "98";

    _match = this.matchUserAgent(
      /Win(?:dows)?(?: Phone)?[ _]?(?:(?:NT|9x) )?((?:(\d+\.)*\d+)|XP|ME|CE)\b/
    );

    if (!(_match && _match[1])) return;

    switch (_match[1]) {
      case "6.4":
        _match[1] = "10.0";
        break;
      case "6.3":
        _match[1] = "8.1";
        break;
      case "6.2":
        _match[1] = "8";
        break;
      case "6.1":
        _match[1] = "7";
        break;
      case "6.0":
        _match[1] = "Vista";
        break;
      case "5.2":
        _match[1] = "Server 2003";
        break;
      case "5.1":
        _match[1] = "XP";
        break;
      case "5.01":
        _match[1] = "2000 SP1";
        break;
      case "5.0":
        _match[1] = "2000";
        break;
      case "4.0":
        _match[1] = "4.0";
        break;
      default:
        break;
    }

    return _match[1];
  }

  extractOperatingSystemVersionNumberFromUserAgent() {
    if (this._report["os"]["name"] == null) return;

    let _match = null;

    switch (this._report["os"]["name"]) {
      case "Windows":
        return this.reportForWindowsSystemVersion();
      case "Windows Phone":
        return this.reportForWindowsSystemVersion();
      case "OS X":
        _match = this.matchUserAgent(/OS X ((\d+[._])+\d+)\b/);
        break;
      case "Linux":
        return null;
      case "iOS":
        _match = this.matchUserAgent(/OS ((\d+[._])+\d+) like Mac OS X/);
        break;
      case "Android":
        _match = this.matchUserAgent(/(?:Android|Adr) (\d+([._]\d+)*)/);
        break;
      case "BlackBerry":
        _match = this.matchUserAgent(/Version\/((\d+\.)+\d+)/);
        break;
      case "BlackBerryOS":
        _match = this.matchUserAgent(/Version\/((\d+\.)+\d+)/);
        break;
      case "BlackBerry Tablet OS":
        _match = this.matchUserAgent(/RIM Tablet OS ((\d+\.)+\d+)/);
        break;
      case "Chrome OS":
        this._report["os"]["version"] = this._report["browser"]["version"];
        break;
      case "KaiOS":
        _match = this.matchUserAgent(/KAIOS\/(\d+(\.\d+)*)/);
        break;
      default:
        break;
    }

    if (!(_match && _match[1])) return;

    /** Replace underscores in version number with periods. */
    return _match[1].replace(/_/g, ".");
  }

  getMacOSXNames() {
    let versions = this._report["os"]["version"].split(".");

    if (!(versions.length >= 2)) return this._report["os"]["name"];

    let minorVersion = parseInt(versions[1], 10);

    if (minorVersion <= 7) return "Mac OS X";

    if (minorVersion >= 12) return "macOS";

    return "OS X";
  }

  getCookieReport() {
    let _uuid = getUid();

    document.cookie = _uuid;

    if (document.cookie.indexOf(_uuid) >= 0) this._report["cookies"] = true;
    else this._report["cookies"] = false;

    document.cookie = `${_uuid}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }

  pullInPluginsInfo() {
    let _match = null;
    let plugin = null;
    let plugins = window.navigator.plugins;

    if (!plugins) return;

    for (let i = 0; i < plugins.length; i++) {
      plugin = plugins.item(i);

      if (plugin.name.indexOf("Flash") >= 0) {
        _match = plugin.description.match(/\b((\d+\.)+\d+)\b/);
        if (_match && _match[1]) this._report["flash"]["version"] = _match[1];
      }

      if (plugin.name.indexOf("Java") >= 0) {
        _match = plugin.description.match(/\b((\d+\.)+\d+)\b/);
        if (_match && _match[1]) this._report["java"]["version"] = _match[1];
      }
    }
  }

  pullInBrowserWindowSize() {
    this._report["viewport"]["width"] =
      window.innerWidth || document.documentElement.clientWidth;
    this._report["viewport"]["height"] =
      window.innerHeight || document.documentElement.clientHeight;
  }

  pullInViewport() {
    this._report["viewport"]["layout"]["width"] =
      document.documentElement.clientWidth;
    this._report["viewport"]["layout"]["height"] =
      document.documentElement.clientHeight;
    this._report["viewport"]["zoom"] =
      this._report["viewport"]["layout"]["width"] /
      this._report["viewport"]["width"];
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
    if (!ExtractDataFromClient.testIfDefinePropertyMethodSupported()) return;

    Object.defineProperty(this._report["browser"], "size", {
      get: function () {
        ExtractDataFromClient.warning(
          "browser.size is deprecated; use viewport.width and viewport.height"
        );
        return (
          this._report["viewport"]["width"] +
          " x " +
          this._report["viewport"]["height"]
        );
      }
    });

    Object.defineProperty(this._report["screen"], "size", {
      get: function () {
        ExtractDataFromClient.warning(
          "screen.size is deprecated; use screen.width and screen.height"
        );
        return (
          this._report["screen"]["width"] +
          " x " +
          this._report["screen"]["height"]
        );
      }
    });

    Object.defineProperty(this._report["screen"], "resolution", {
      get: function () {
        ExtractDataFromClient.warning(
          "screen.resolution is deprecated; multiply screen.width and screen.height by screen.dppx"
        );
        return (
          this._report["screen"]["dppx"] * this._report["screen"]["width"] +
          " x " +
          this._report["screen"]["dppx"] * this._report["screen"]["height"]
        );
      }
    });
  }

  startReporting() {
    this._report["browser"]["name"] = this.extractBrowserNameFromUserAgent();
    this._report["browser"]["version"] =
      this.extractBrowserVersionNumberFromUserAgent();

    this._report["os"]["name"] = this.extractOperatingSystemNameFromUserAgent();
    this._report["os"]["version"] =
      this.extractOperatingSystemVersionNumberFromUserAgent();

    if (this._report["os"]["name"] === "OS X" && this._report["os"]["version"])
      this._report["os"]["name"] = this.getMacOSXNames();

    this.pullInBrowserWindowSize();
    this.pullInViewport();
    this.pullInW3CScreenInfo();

    this.deprecateProperties();

    this.pullInPluginsInfo();

    /** Are websockets supported. */
    this._report["websockets"] = !!window.WebSocket;
    /** Preferred language(s) for displaying pages. */
    this._report["lang"] =
      window.navigator.languages || window.navigator.language;
    /** Report last requested at. */
    this._report["lastRequestedAt"] = new Date().toString();
  }

  get report() {
    this.startReporting();

    return this._report;
  }

  set userAgent(_userAgent) {
    this._userAgent = _userAgent;
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
    consoleMessagesEnabled = true;

    if (!window.console) consoleLog(message);

    if (console.warn) consoleWarn(message);
  }
}
