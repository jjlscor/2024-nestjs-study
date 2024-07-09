import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): string {
    return 'Welcome';
  }
}
@Injectable()
export class Hello {
  gethi(): string {
    return 'Hello';
  }
}
