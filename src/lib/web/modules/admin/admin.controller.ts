import { Controller, Get, Render } from '@nestjs/common'

@Controller('/admin')
class AdminController {
  @Get()
  @Render('admin/index')
  root() {
    return {}
  }
}

export { AdminController }
