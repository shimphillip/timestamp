/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'

// If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

const getNow = () => {
  const now = new Date()
  const unix = now.getTime()
  const utc = now.toUTCString()

  return { unix, utc }
}

const getUTCFromUnix = (dateString: string) =>
  new Date(Number(dateString)).toUTCString()

const ERROR_MESSAGE = 'Invalid Date'

const controller = {
  getCurrentTime: (req: Request, res: Response) => {
    const { unix, utc } = getNow()
    return res.status(200).json({
      unix,
      utc,
    })
  },

  getTimes: (req: Request, res: Response) => {
    const { date_string: dateString } = req.params

    // dateString is a number, so the input is UNIX
    if (!isNaN(Number(dateString))) {
      return res.status(200).json({
        unix: dateString,
        utc: getUTCFromUnix(dateString),
      })
    }

    // Using parseInt on a string only returns numbers if any
    if (new Date(dateString).toString() === ERROR_MESSAGE) {
      return res.status(400).json({
        error: ERROR_MESSAGE,
      })
    }

    // ISO-8601 (e.g. "2016-11-20") or bad string
    res.json({
      message: dateString,
    })
  },
}

export default controller
