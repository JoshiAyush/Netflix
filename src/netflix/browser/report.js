"use strict";

const parser = require("ua-parser-js");
const { networkInterfaces } = require("os");

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
    this.userAgent.networkInterfaces = networkInterfaces();
  }

  getuserAgent() {
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

  get loopbackPseudoInterface() {
    /**
     * @method loopbackPseudoInterface() returns the loopback Pseudo-Interface from the networkInterfaces object.
     * @returns {Array} loopback Pseudo-Interfaces.
     */
    return this.userAgent.networkInterfaces.lo;
  }

  get loopbackPseudoInterfaceIPv4() {
    /**
     * @method loopbackPseudoInterfaceIPv4() filters out the family 'IPv4' from the array of objects.
     * @returns {Object} loopback Pseudo-Interface of IPv4 family.
     */
    return this.loopbackPseudoInterface.filter((item) => item.family == "IPv4");
  }

  get loopbackPseudoInterfaceIPv4Address() {
    /**
     * @method loopbackPseudoInterfaceIPv4Address() returns the loopback Pseudo-Interface IPv4 address.
     * @returns {String} loopback Pseudo-Interface IPv4 address.
     */
    return this.loopbackPseudoInterfaceIPv4.address;
  }

  get loopbackPseudoInterfaceIPv4Netmask() {
    /**
     * @method loopbackPseudoInterfaceIPv4Netmask() returns the loopback Pseudo-Interfcae IPv4 network mask.
     * @returns {String} loopback Pseudo-Interface IPv4 netmask.
     */
    return this.loopbackPseudoInterfaceIPv4.netmask;
  }

  get loopbackPseudoInterfaceIPv4Family() {
    /**
     * @method loopbackPseudoInterfaceIPv4Family() returns the loopback Pseudo-Interface IPv4 family which is IPv4 of course.
     * @returns {String} loopback Pseudo-Interface IPv4 family.
     */
    return this.loopbackPseudoInterfaceIPv4.family;
  }

  get loopbackPseudoInterfaceIPv4Mac() {
    /**
     * @method loopbackPseudoInterfaceIPv4Mac() returns the loopback Pseudo-Interface IPv4 mac address.
     * @returns {String} loopback Pseudo-Interface mac address.
     */
    return this.loopbackPseudoInterfaceIPv4.mac;
  }

  get loopbackPseudoInterfaceIPv4Internal() {
    /**
     * @method loopbackPseudoInterfaceIPv4Internal() returns a boolean true if the interface is loopback otherwise false.
     * @returns {Boolean} loopback Pseudo-Interface internal.
     */
    return this.loopbackPseudoInterfaceIPv4.internal;
  }

  get loopbackPseudoInterfaceIPv4CIDR() {
    /**
     * @method loopbackPseudoInterfaceIPv4CIDR() returns a string that specifies the assigned IPv4 or IPv6 address with the routing
     * prefix in CIDR notation. It is set to null if netmask is invalid.
     * @returns {String} loopback Pseudo-Interface cidr.
     */
    return this.loopbackPseudoInterfaceIPv4.cidr;
  }

  get loopbackPseudoInterfaceIPv6() {
    /**
     * @method loopbackPseudoInterfaceIPv6() filters out the family 'IPv6' from the array of objects.
     * @returns {Object} loopback Pseudo-Interface of IPv6 family.
     */
    return this.loopbackPseudoInterface.filter((item) => item.family == "IPv6");
  }

  get loopbackPseudoInterfaceIPv6Address() {
    /**
     * @method loopbackPseudoInterfaceIPv6Address() returns the loopback Pseudo-Interface IPv6 address.
     * @returns {String} loopback Pseudo-Interface IPv6 address.
     */
    return this.loopbackPseudoInterfaceIPv6.address;
  }

  get loopbackPseudoInterfaceIPv6Netmask() {
    /**
     * @method loopbackPseudoInterfaceIPv6Netmask() returns the loopback Pseudo-Interface IPv6 network mask.
     * @returns {String} loopback Pseudo-Interface IPv6 network mask.
     */
    return this.loopbackPseudoInterfaceIPv6.netmask;
  }

  get loopbackPseudoInterfaceIPv6Family() {
    /**
     * @method loopbackPseudoInterfaceIPv6Family() returns the loopback Pseudo-Interface IPv6 family which is IPv6 of course.
     * @returns {String} loopback Pseudo-Interface family.
     */
    return this.loopbackPseudoInterfaceIPv6.family;
  }

  get loopbackPseudoInterfaceIPv6Mac() {
    /**
     * @method loopbackPseudoInterfaceIPv6Mac() returns the loopback Pseudo-Interface IPv6 mac address.
     * @returns {String} loopback Pseudo-Interface mac address.
     */
    return this.loopbackPseudoInterfaceIPv6.mac;
  }

  get loopbackPseudoInterfaceIPv6Internal() {
    /**
     * @method loopbackPseudoInterfaceIPv6Internal() returns a boolean true if the interface is loopback otherwise false.
     * @returns {Boolean} loopback Pseudo-Interface internal.
     */
    return this.loopbackPseudoInterfaceIPv6.internal;
  }

  get loopbackPseudoInterfaceIPv6CIDR() {
    /**
     * @method loopbackPseudoInterfaceIPv6CIDR() returns a string that specifies the assigned IPv4 or IPv6 address with the routing
     * prefix in CIDR notation. It is set to null if netmask is invalid.
     * @returns {String} loopback Pseudo-Interface cidr.
     */
    return this.loopbackPseudoInterfaceIPv6.cidr;
  }

  get loopbackPseudoInterfaceIPv6ScopeID() {
    /**
     * @method loopbackPseudoInterfaceIPv6ScopeID() returns loopback Pseudo-Interface IPv6 scopeid.
     * @returns {Number} loopback Pseudo-Interface scopeid.
     */
    return this.loopbackPseudoInterfaceIPv6.scopeid;
  }

  get wirelessLoopbackPseudoInterface1() {
    /**
     * @method wirelessLoopbackPseudoInterface1() returns the wireless loopback Pseudo-Interface 1 from the networkInterfaces object.
     * @returns {Object} wireless loopback Pseudo-Interface 1.
     */
    return this.userAgent.networkInterfaces.wlo1;
  }

  get wirelessLoopbackPseudoInterface1IPv4() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv4() filters out the family 'IPv6' from the array of objects.
     * @returns {Object} wireless loopback Pseudo-Interface 1 IPv4 family.
     */
    return this.wirelessLoopbackPseudoInterface1.filter(
      (item) => item.family == "IPv4"
    );
  }

  get wirelessLoopbackPseudoInterface1IPv4Address() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv4Address() returns the wireless loopback Pseudo-Interface 1 IPv4 address.
     * @returns {String} wireless loopback Pseudo-Interface IPv4 address.
     */
    return this.wirelessLoopbackPseudoInterface1IPv4.address;
  }

  get wirelessLoopbackPseudoInterface1IPv4Netmask() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv4Netmask() returns the wireless loopback Pseudo-Interface 1 IPv4 network mask.
     * @returns {String} wireless loopback Pseudo-Interface 1 IPv4 network mask.
     */
    return this.wirelessLoopbackPseudoInterface1IPv4.netmask;
  }

  get wirelessLoopbackPseudoInterface1IPv4Family() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv4Family() returns the wireless loopback Pseudo-Interface 1 IPv4 family which is IPv4 of course.
     * @returns {String} wireless loopback Pseudo-Interface 1 IPv4 family.
     */
    return this.wirelessLoopbackPseudoInterface1IPv4.family;
  }

  get wirelessLoopbackPseudoInterface1IPv4Mac() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv4Mac() returns the wireless loopback Pseudo-Interface 1 IPv4 mac address.
     * @returns {String} wireless loopback Pseudo-Interface 1 IPv4 mac address.
     */
    return this.wirelessLoopbackPseudoInterface1IPv4.mac;
  }

  get wirelessLoopbackPseudoInterface1IPv4Internal() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv4Internal() returns a boolean true if the interface is loopback otherwise false.
     * @returns {Boolean} wireless loopback Pseudo-Interface 1 IPv4 internal.
     */
    return this.wirelessLoopbackPseudoInterface1IPv4.internal;
  }

  get wirelessLoopbackPseudoInterface1IPv4CIDR() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv4CIDR() returns a string that specifies the assigned IPv4 or IPv6 address with the routing
     * prefix in CIDR notation. It is set to null if netmask is invalid.
     * @returns {String} wirless loopback Pseudo-Interface 1 IPv4 cidr.
     */
    return this.wirelessLoopbackPseudoInterface1IPv4.cidr;
  }

  get wirelessLoopbackPseudoInterface1IPv6() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv4() filters out the 'IPv6' family from the array of objects.
     * @returns {Object} wireless loopback Pseudo-Interface 1 IPv6 family.
     */
    return this.wirelessLoopbackPseudoInterface1.filter(
      (item) => item.family == "IPv6"
    );
  }

  get wirelessLoopbackPseudoInterface1IPv6Address() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv6Address() returns the wireless loopback Pseudo-Interface 1 IPv6 address.
     * @returns {String} wireless loopback Pseudo-Interface 1 IPv6 address.
     */
    return this.wirelessLoopbackPseudoInterface1IPv6.address;
  }

  get wirelessLoopbackPseudoInterface1IPv6Netmask() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv6Netmask() returns the wireless loopback Pseudo-Interface 1 IPv6 network mask.
     * @returns {String} wireless loopback Pseudo-Interface 1 IPv6 network mask.
     */
    return this.wirelessLoopbackPseudoInterface1IPv6.netmask;
  }

  get wirelessLoopbackPseudoInterface1IPv6Family() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv6Family() returns the wireless loopback Pseudo-Interface 1 IPv6 family which is IPv6 of course.
     * @returns {String} wireless loopback Pseudo-Interface 1 IPv6 family.
     */
    return this.wirelessLoopbackPseudoInterface1IPv6.family;
  }

  get wirelessLoopbackPseudoInterface1IPv6Mac() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv6Mac() returns the wireless loopback Pseudo-Interface 1 IPv6 mac address.
     * @returns {String} wireless loopback Pseudo-Interface 1 IPv6 mac address.
     */
    return this.wirelessLoopbackPseudoInterface1IPv6.mac;
  }

  get wirelessLoopbackPseudoInterface1IPv6Internal() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv6Internal() returns a boolean true if the interface is loopback otherwise false.
     * @returns {Boolean} wireless loopback Pseudo-Interface 1 internal.
     */
    return this.wirelessLoopbackPseudoInterface1IPv6.internal;
  }

  get wirelessLoopbackPseudoInterface1IPv6CIDR() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv6CIDR() returns a string that specifies the assigned IPv4 or IPv6 address with the routing
     * prefix in CIDR notation. It is set to null if netmask is invalid.
     * @returns {String} wirless loopback Pseudo-Interface 1 IPv6 cidr.
     */
    return this.wirelessLoopbackPseudoInterface1IPv6.cidr;
  }

  get wirelessLoopbackPseudoInterface1IPv6ScopeID() {
    /**
     * @method wirelessLoopbackPseudoInterface1IPv6ScopeID() returns the wireless loopback Pseudo-Interface 1 IPv6 scopeid.
     * @returns {Number} wireless loopback Pseudo-Interface 1 scopeid.
     */
    return this.wirelessLoopbackPseudoInterface1IPv6.scopeid;
  }
}

export default UserAgent;
