import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { CryptoModule } from '../crypto/crypto.module';
import { JwtAccessStrategy } from './strategies/jwt/access-token/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt/refresh-token/jwt-refresh.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    CryptoModule,
    JwtModule.register({
      secret: 'SECRET',
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtAccessStrategy,
    JwtRefreshStrategy,
  ],
})
export class AuthModule {}
