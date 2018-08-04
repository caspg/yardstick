import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common'
import { Logger } from '@nestjs/common'
import * as morgan from 'morgan'
import * as stream from 'stream'

import { config } from '@app/config'

class LoggerStream extends stream.Writable {
  _write(chunk, _encoding, next) {
    const cleanString = chunk.toString().trim()

    Logger.log(cleanString, `${config.projectName}-HTTP`, false)
    next()
  }
}

@Injectable()
class HttpLogger implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next: any) => {

      const stream = new LoggerStream()
      morgan('tiny', { stream })(req, res, next)
    }
  }
}

export { HttpLogger }
