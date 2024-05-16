import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { GatewayService } from 'src/gateway/gateway.service';

@Controller()
export class KafkaController {
  constructor(private gatewayService: GatewayService) {}

  @EventPattern('kafkatopic')
  public wsGatewayEventListener(
    @Payload() message: string,
    @Ctx() context: KafkaContext,
  ): void {
    const key = context.getArgByIndex(0).key;
    this.gatewayService.handleMessage(key, message);
  }
}
