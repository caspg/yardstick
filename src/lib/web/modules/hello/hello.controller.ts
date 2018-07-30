import { Controller, Get, Render } from '@nestjs/common'

@Controller('/')
class HelloController {
  @Get()
  @Render('hello/index')
  hello() {
    return { message: 'Hello world!' }
  }
}

export { HelloController }
