import { StatusCodes } from 'http-status-codes'
import _ from 'lodash'
import express from 'express'

interface ErrorResponse {
  errors?: any
  message?: any
  code?: any
  data?: any
  statusCode: number
}

const ERROR_CODES = [StatusCodes.UNPROCESSABLE_ENTITY, StatusCodes.BAD_REQUEST]

const ErrorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const response: ErrorResponse = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR
  }

  if (_.includes(ERROR_CODES, err.statusCode)) {
    response.errors = err.errors
  }

  if (err.message) {
    response.message = err.message
  }

  if (err.errorDetail) {
    response.code = err.errorDetail.code
  }

  if (err.data) {
    response.data = err.data
  }

  response.statusCode = err.statusCode ? err.statusCode : StatusCodes.INTERNAL_SERVER_ERROR

  res.status(response.statusCode).json(response)
}
export default ErrorHandler
