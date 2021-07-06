import UserAgent from "../UserAgent.js";

export function getBrowserInformation() {
  /**
   * @function getBrowserInformation() returns a string containing formatted data about the client's Browser.
   * @returns {String} Client's Browser information.
   */
  const useragent = new UserAgent(window.navigator.userAgent);

  if (!(useragent.browser.name && useragent.browser.version)) return null;

  return `${useragent.browser.name} ${useragent.browser.version} ${useragent.browser.major} (Major)`;
}

export function getCpuInformation() {
  /**
   * @function getCpuInformation() returns a formatted string containing information about the client's CPU.
   * @returns {String} Client's CPU information.
   */
  const useragent = new UserAgent(window.navigator.userAgent);

  if (!useragent.CPU.architecture) return null;

  return `${useragent.CPU.architecture}`;
}

export function getDeviceInformation() {
  /**
   * @function getDeviceInformation() returns a fomatted string containing information about client's Device.
   * @returns {String} Client's Device information.
   */
  const useragent = new UserAgent(window.navigator.userAgent);

  if (
    !(
      useragent.device.vendor &&
      useragent.device.model &&
      useragent.device.type
    )
  )
    return null;

  return `${useragent.device.vendor} (Vendor) ${useragent.device.model} (Model) ${useragent.device.type} (Type)`;
}

export function getEngineInformation() {
  /**
   * @function getEngineInformation() returns a formatted string containing information about client's Engine.
   * @returns {String} Client's Engine information.
   */
  const useragent = new UserAgent(window.navigator.userAgent);

  if (!(useragent.engine.name && useragent.engine.version)) return null;

  return `${useragent.engine.name} ${useragent.engine.version}`;
}

export function getOsInformation() {
  /**
   * @function getOsInformation() returns a formatted string containing information about client's OS.
   * @returns {String} Client's OS information.
   */
  const useragent = new UserAgent(window.navigator.userAgent);

  if (!(useragent.OS.name && useragent.OS.version)) return null;

  return `${useragent.OS.name} ${useragent.OS.version}`;
}
