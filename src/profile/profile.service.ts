import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfileDto } from './dto/create-profile.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(User.name) private profileModel: Model<User>) {}

  async createProfile(userId: string, dto: CreateProfileDto) {
    const newProfile = new this.profileModel({ ...dto, userId });
    return newProfile.save();
  }

  async getProfile(userId: string) {
    return this.profileModel.findOne({ userId });
  }

  async updateProfile(userId: string, dto: CreateProfileDto) {
    return this.profileModel.findOneAndUpdate({ userId }, dto, { new: true });
  }
}
