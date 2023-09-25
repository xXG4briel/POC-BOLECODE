// import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async token(@Body() body) {
    const client_id = body?.client_id;
    const client_secret = body?.client_secret;

    return this.authService.token({
      client_id,
      client_secret,
    });
  }
}
