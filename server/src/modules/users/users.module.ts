import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CryptoModule } from '../crypto/crypto.module';
import { ExcludePasswordInterceptor } from './interceptors/exclude-password.interceptor';

@Module({
  imports: [CryptoModule],
  controllers: [UsersController],
  providers: [UsersService, ExcludePasswordInterceptor],
})
export class UsersModule {}
