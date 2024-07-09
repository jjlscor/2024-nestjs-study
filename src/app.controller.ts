import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Hello } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWelcome(): string {
    return this.appService.getWelcome();
  }
}
@Controller('hello')
export class Hellocontroller {
  constructor(private readonly Hello: Hello) {}
  @Get()
  getHello(): string {
    return this.Hello.gethi();
  }
}
