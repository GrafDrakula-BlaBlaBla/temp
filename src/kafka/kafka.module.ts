import { Module } from '@nestjs/common';
import { GatewayService } from 'src/gateway/gateway.service';
import { GatewayIoAdapter } from 'src/gateway/gatewayIoAdapter.service';
import { KafkaController } from './kafka.controller';

@Module({
  controllers: [KafkaController],
  providers: [GatewayService, GatewayIoAdapter],
})
export class KafkaModule {}
