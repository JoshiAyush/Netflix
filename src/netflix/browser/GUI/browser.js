import UserAgent from "../UserAgent.js";

export function getBrowserInformation() {
  const useragent = new UserAgent(window.navigator.userAgent);

  if (!(useragent.browser.name && useragent.browser.version)) return null;

  return `Browser: ${useragent.browser.name} ${useragent.browser.version} ${useragent.browser.major}`;
}

export function getCpuInformation() {
  const useragent = new UserAgent(window.navigator.userAgent);

  if (!useragent.CPU.architecture) return null;

  return `CPU: ${useragent.CPU.architecture}`;
}

export function getDeviceInformation() {
  const useragent = new UserAgent(window.navigator.userAgent);

  if (
    !(
      useragent.device.vendor &&
      useragent.device.model &&
      useragent.device.type
    )
  )
    return null;

  return `Device: ${useragent.device.vendor} (Vendor) ${useragent.device.model} (Model) ${useragent.device.type} (Type)`;
}

export function getEngineInformation() {
  const useragent = new UserAgent(window.navigator.userAgent);

  if (!(useragent.engine.name && useragent.engine.version)) return null;

  return `Engine: ${useragent.engine.name} ${useragent.engine.version}`;
}

export function getOsInformation() {
  const useragent = new UserAgent(window.navigator.userAgent);

  if (!(useragent.OS.name && useragent.OS.version)) return null;

  return `OS: ${useragent.OS.name} ${useragent.OS.version}`;
}
