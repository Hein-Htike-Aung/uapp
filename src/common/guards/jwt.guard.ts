import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // By extending AuthGuard with 'jwt', this automatically connects with the JwtStrategy
}
