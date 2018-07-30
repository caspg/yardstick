import { Controller, Get } from '@nestjs/common'

@Controller('/')
class HelloController {
  @Get()
  hello() {
    return 'Hello forld from new structure!'
  }
}

export { HelloController }
