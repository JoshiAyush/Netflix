"use strict";

const parser = require("ua-parser-js");

class UserAgent {
  /**
   * @class UserAgent detects browser, engine, os, cpu and device of the client.
   */
  constructor(userAgent) {
    /**
     * @constructor constructs a user agent object with full details.
     * @argument {String} userAgent
     */
    this.userAgent = parser(userAgent);
  }

  get userAgent() {
    /**
     * @method userAgent() returns the user agent with complete details.
     * @returns {Object} user agent.
     */
    return this.userAgent;
  }

  get browser() {
    /**
     * @method browser() returns the browser info.
     * @returns {Object} browser info.
     */
    return this.userAgent.browser;
  }

  get engine() {
    /**
     * @method engine() returns the engine info.
     * @returns {Object} engine info.
     */
    return this.userAgent.engine;
  }

  get OS() {
    /**
     * @method OS() returns the OS info.
     * @returns {Object} OS info.
     */
    return this.userAgent.os;
  }

  get device() {
    /**
     * @method device() returns the device info.
     * @returns {Object} device info.
     */
    return this.userAgent.device;
  }

  get CPU() {
    /**
     * @method CPU() returns the CPU info.
     * @returns {Object} CPU info.
     */
    return this.userAgent.cpu;
  }
}

export default UserAgent;
