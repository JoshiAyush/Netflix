export class ValidationErrorException extends Error {
  constructor(message = "ValidationError") {
    super(message);

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ValidationErrorException);

    this.name = "ValidationErrorException";
    this.data = new Date();
    this.message = "ValidationErrorException";
  }
}

export class ArgumentTypeMisMatchException extends Error {
  constructor(message = "ArgumentTypeMisMatchException", ...args) {
    super(`${message}: ${args.join(", ")}`);

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ArgumentTypeMisMatchException);

    this.name = "ArgumentTypeMisMatchException";
    this.date = new Date();
    this.message = `ArgumentTypeMisMatchException: ${args.join(", ")}`;
  }
}

export class PropertyDoesNotExistException extends Error {
  constructor(message = "PropertyDoesNotExistException", name = "") {
    super(`${message}: ${name}`);

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, PropertyDoesNotExistException);

    this.name = "PropertyDoesNotExistException";
    this.date = new Date();
    this.message = `PropertyDoesNotExistException: ${name}`;
  }
}

export class UndefinedVariableException extends Error {
  constructor(message = "UndefinedVariableException", name = "") {
    super(`${message}: ${name}`);

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, UndefinedVariableException);

    this.name = "UndefinedVariableException";
    this.date = new Date();
    this.message = `UndefinedVariableException: ${name}`;
  }
}
