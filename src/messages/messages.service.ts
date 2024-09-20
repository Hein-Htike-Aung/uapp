import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../schemas/message.schema';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async createMessage(dto: SendMessageDto) {
    const newMessage = new this.messageModel(dto);
    return newMessage.save();
  }

  async getMessagesForUser(userId: string) {
    return this.messageModel.find({ receiverId: userId });
  }
}
