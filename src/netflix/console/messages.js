export var consoleMessagesEnabled = false;

export function consoleLog(_str, ...props) {
  /**
   * @function consoleLog() sends text messages to console while debugging, we disable the variable consoleMessagesEnabled when
   * the application is in production.
   * @argument {String} _str message to display on the screen.
   * @returns {undefined} undefined if consoleMessagesEnabled is set to false.
   */
  if (!consoleMessagesEnabled) return;

  if (!props) {
    console.log(_str);
    return;
  }

  console.log(_str, ...props);
}

export function consoleWarn(_str, ...props) {
  /**
   * @function consoleWarn() sends warning text to console while debugging, we disable the variable consoleMessagesEnabled when the
   * application is in production.
   * @argument {String} _str message to display on the screen.
   * @returns {undefined} undefined if consoleMessagesEnabled is set to false.
   */
  if (!consoleMessagesEnabled) return;

  if (!props) {
    console.warn(_str);
    return;
  }

  console.warn(_str, ...props);
}

export function consoleError(_str) {
  /**
   * @function consoleWarn() sends error text to console while debugging, we disable the variable consoleMessagesEnabled when the
   * application is in production.
   * @argument {String} _str message to display on the screen.
   * @returns {undefined} undefined if consoleMessagesEnabled is set to false.
   */
  if (!consoleMessagesEnabled) return;

  if (!props) {
    console.error(_str);
    return;
  }

  console.error(_str, ...props);
}
