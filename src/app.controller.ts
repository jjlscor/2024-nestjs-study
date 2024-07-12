import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Hello } from './app.service';

@Controller('app')
export class AppController {
  private appservice: AppService;
  constructor(appservice: AppService) {
    this.appservice = appservice;
  }
  @Get()
  getWelcome(): string {
    return this.appservice.getWelcome();
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
