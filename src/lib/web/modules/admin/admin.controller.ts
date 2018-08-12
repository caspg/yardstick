import { Controller, Get, Render } from '@nestjs/common'

@Controller('/admin')
class AdminController {
  @Get()
  @Render('admin/index')
  root() {
    return {}
  }
  // not sure if the below routes should be in AdminController
  @Get('/breweries/new')
  @Render('admin/breweries/new')
  new() {
    return {}
  }

  @Get('/breweries/:id/edit')
  @Render('admin/breweries/edit')
  edit() {
    return {}
  }
}

export { AdminController }
