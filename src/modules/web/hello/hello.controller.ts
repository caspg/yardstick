import { Controller, Get, Render } from '@nestjs/common'

@Controller('/')
class HelloController {
  @Get()
  @Render('index')
  hello() {
    return { message: 'Hello world!' }
  }
}

export { HelloController }
