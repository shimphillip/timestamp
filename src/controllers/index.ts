/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'

// If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

const getNow = () => {
  const now = new Date()
  const unix = now.getTime()
  const utc = now.toUTCString()

  return { unix, utc }
}

const controller = {
  getCurrentTime: (req: Request, res: Response) => {
    const { unix, utc } = getNow()
    return res.json({
      unix,
      utc,
    })
  },

  getTimes: (req: Request, res: Response) => {
    const { date_string: dateString } = req.params
    const isTime = new Date(dateString)

    // 'Invalid Date' is the error message produced by new Date()
    if (isTime.toString() === 'Invalid Date') {
      console.log('yay wrong')
    }

    // find out if unix

    console.log('date string', isTime)

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
