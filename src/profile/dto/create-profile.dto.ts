import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty() @IsString() name: string;
  @IsNotEmpty() @IsString() gender: string;
  @IsNotEmpty() dob: string;
  horoscope: string;
  zodiac: string;
  height: number;
  weight: number;
  aboutMe: string;
  interest: string;
}
