import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';

@Module({
  providers: [MessagesService],
  controllers: [MessagesGateway],
})
export class MessagesModule {}
