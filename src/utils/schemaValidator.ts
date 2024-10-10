import Joi from 'joi';
import { SchemaValidatorError } from './exceptions';

export function schemaValidator<T>(body: unknown, schema: Joi.AnySchema): T {
  const validation = schema.validate(body);

  if (validation.error) throw new SchemaValidatorError(validation.error.details[0].message);

  return validation.value as T;
}
