import express from 'express'
import ErrorHandler from '../common/exceptions/error.handle'

const ErrorHandlerMiddleware = (
  error: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  return ErrorHandler(error, req, res, next)
}

export default ErrorHandlerMiddleware
