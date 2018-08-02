import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { BreweryModule } from './modules/brewery/brewery.module'

/**
 * Main app logic.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BreweryModule,
  ],
  exports: [BreweryModule],
})
export class CoreModule {}
