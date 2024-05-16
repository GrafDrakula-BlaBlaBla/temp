import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'soket.io';

@WebSocketGateway({
  path: '/ws-gateway-service/',
  cors: {
    origin: '*',
  },
})
export class GatewayService
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log('Init');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected ${client.id}`);
  }

  handleMessage(key:string, message: string): void {
    console.log(`Try to emit ${key}`);
    this.server.emit(key, message);
  }
}
