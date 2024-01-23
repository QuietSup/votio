import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CryptoModule } from '../crypto/crypto.module';
import { ExcludePasswordInterceptor } from './interceptors/exclude-password.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [CryptoModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, ExcludePasswordInterceptor],
})
export class UsersModule {}
