import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { GatewayIoAdapter } from './gateway/gatewayIoAdapter.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    // Подключение к кафке
  });

  app.useWebSocketAdapter(new GatewayIoAdapter(app));

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
