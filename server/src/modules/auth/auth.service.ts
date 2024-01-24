import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterRequest } from './dto/register.request';
import { UsersService } from '../users/users.service';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { CryptoService } from '../crypto/crypto.service';
import { LoginRequest } from './dto/login.request';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private cryptoService: CryptoService,
    private jwtService: JwtService,
  ) {}

  register(createAuthDto: RegisterRequest) {
    return 'This action adds a new auth';
  }

  async validateUser(registerRequest: RegisterRequest) {
    const user = await this.usersService.findOneByEmail(registerRequest.email);
    if (
      user &&
      user.password === this.cryptoService.encrypt(registerRequest.password)
    ) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }

  login(user: any) {
    const payload = { email: user.email, sub: user.uuid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  signOut(id: number) {
    return `This action removes a #${id} auth`;
  }
}
