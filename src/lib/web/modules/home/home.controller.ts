import { Controller, Get, Render, Res } from '@nestjs/common'

@Controller('/home')
class HomeController {
  // @Get()
  // @Render('home/index')
  // root() {
  //   return {}
  // }
  @Get()
  root(@Res() res) {
    res.render('home/index', {
      layout: 'layouts/home_layout',
    })
  }
}

export { HomeController }
