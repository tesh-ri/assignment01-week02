import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { UserController } from './users/user-controller/user-controller';
import { UserServices } from './users/user-service/user-service';
import { pingController } from 'ping/ping.controller';


@Module({
  
  controllers: [AppController, UserController,pingController],
  providers: [AppService, UserServices],
})
export class AppModule {}
