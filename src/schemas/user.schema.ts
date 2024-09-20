import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop() userId: string;
  @Prop() password: string;
  @Prop() name: string;
  @Prop() gender: string;
  @Prop() dob: string;
  @Prop() horoscope: string;
  @Prop() zodiac: string;
  @Prop() height: number;
  @Prop() weight: number;
  @Prop() aboutMe: string;
  @Prop() interest: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
