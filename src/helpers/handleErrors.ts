/* eslint-disable no-console */
import { RequestHandler, ErrorRequestHandler } from 'express';
import createError from 'http-errors';

export const handle400: RequestHandler = (req, res, next): void => {
  next(createError(400, 'The request was a bad request'));
};

export const logErrors: ErrorRequestHandler = (error, req, res, next): void => {
  if (process.env.NODE_ENV === 'development') {
    console.error(error.stack);
  }

  next(error);
};

export const handleErrors: ErrorRequestHandler = (error, req, res): void => {
  const statusCode = error.status || 500;
  const statusMessage = error.message || 'Internal Server Error';
  res.status(statusCode).json({
    statusCode,
    statusMessage,
  });
};
