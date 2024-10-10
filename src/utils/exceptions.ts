import { StatusCodes } from "http-status-codes";

class BaseError extends Error {
  statusCode: number;
  message: string;

  constructor(name: string, message: string, statusCode: number) {
    super(`${name}: ${message}`);
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super("Not Found Error", message, StatusCodes.NOT_FOUND);
  }
}
export class SchemaValidatorError extends BaseError {
    constructor(message: string) {
        super("Schema Validator Error", message, StatusCodes.UNPROCESSABLE_ENTITY);
    }
  }
  