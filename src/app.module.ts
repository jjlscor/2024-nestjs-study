import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hello } from './app.service';
import { Hellocontroller } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
@Module({
  imports: [],
  providers: [Hello],
  controllers: [Hellocontroller],
})
export class HelloModule {}
