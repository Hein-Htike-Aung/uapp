import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from './messages.service';
import { SendMessageDto } from './dto/send-message.dto';

@WebSocketGateway()
export class MessagesGateway {
  @WebSocketServer() server: Server;

  constructor(private messagesService: MessagesService) {}

  @SubscribeMessage('sendMessage')
  async handleMessage(
    @MessageBody() messageDto: SendMessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.messagesService.createMessage(messageDto);
    this.server.emit('message', message);
    return message;
  }
}
