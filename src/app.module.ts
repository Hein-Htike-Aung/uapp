import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    ProfileModule,
    MessagesModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost/nestjs_app',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
