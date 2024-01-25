import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './strategies/local/local-auth.guard';
import { JwtAccessGuard } from './strategies/jwt/access-token/jwt-access.guard';
import { JwtRefreshGuard } from './strategies/jwt/refresh-token/jwt-refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAccessGuard)
  @Get('profile')
  async profile(@Request() req: any) {
    return req.user;
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
