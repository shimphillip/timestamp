/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'

// If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

const getNow = () => {
  const now = new Date()
  const unix = now.getTime()
  const utc = now.toUTCString()

  return { unix, utc }
}

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
    const dateNumber = parseInt(dateString)

    // Using parseInt on a string only returns numbers if any
    if (dateNumber.toString().length !== dateString.length) {
      return res.status(400).json({
        error: ERROR_MESSAGE,
      })
    }

    // const timeInput = new Date(parseInt(dateString))

    // console.log('timeInput', timeInput)

    // find out if unix

    res.json({
      message: dateString,
    })

    // find out if iso utc

    // // unix
    // if (!isNaN(dateString)) {
    //   return new Date(parseInt(dateString, 10))
    // }
    // // ISO-8601 (e.g. "2016-11-20") or bad string
    // return new Date(dateString)
  },
}

export default controller
