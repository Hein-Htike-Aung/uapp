import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@Controller('api')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Post('createProfile')
  createProfile(@Body() createProfileDto: CreateProfileDto, @Req() req: any) {
    return this.profileService.createProfile(req.user.userId, createProfileDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getProfile')
  getProfile(@Req() req: any) {
    return this.profileService.getProfile(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('updateProfile')
  updateProfile(@Body() createProfileDto: CreateProfileDto, @Req() req: any) {
    return this.profileService.updateProfile(req.user.userId, createProfileDto);
  }
}
