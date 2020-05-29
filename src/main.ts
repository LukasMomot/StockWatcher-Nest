import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log(`API is strated on: ${process.platform}`);
  await app.listen(3000);
}
bootstrap();
