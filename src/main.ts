import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HelloModule} from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const Hello = await NestFactory.create(HelloModule);
  await Hello.listen(3001);
}
bootstrap();
