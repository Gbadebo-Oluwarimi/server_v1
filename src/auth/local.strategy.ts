import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(username: string, password: string): Promise<any> {
    console.log('localStrategy Working');
    const user = await this.authService.validateuser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    console.log('validated User', user);
    return user;
  }
}
