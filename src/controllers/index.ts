/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'
import { getTimeStamps } from '../helpers/time'

const controller = {
  // If the date string is empty it, return current timestamp
  getCurrentTime: (req: Request, res: Response) => {
    return res.status(200).json(getTimeStamps({}))
  },

  getTimes: (req: Request, res: Response) => {
    const { date_string: dateString } = req.params

    // dateString is a number, so the input is UNIX
    if (!isNaN(Number(dateString))) {
      return res.status(200).json(getTimeStamps({ isUnix: true, dateString }))
    }

    // Using parseInt on a non-date string returns INVALID
    const ERROR_MESSAGE = 'Invalid Date'
    if (new Date(dateString).toString() === ERROR_MESSAGE) {
      return res.status(400).json({
        error: ERROR_MESSAGE,
      })
    }

    // Valid time input besides unix, returns UTC format
    // ISO-8601 (e.g. "2016-11-20") is used for testing
    res.status(200).json(getTimeStamps({ dateString }))
  },
}

export default controller
