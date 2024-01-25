import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserRequest } from './dto/create-user.request';
import { CryptoService } from '../crypto/crypto.service';
import { UserAlreadyExistsException } from 'src/exceptions/user-already-exists.exception';
import { FindManyRequest } from './dto/find-many.request';
import { UserResponse } from './dto/user.response';
import { UpdateUserRequest } from './dto/update-user.request';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private cryptoService: CryptoService,
  ) {}

  async create(createUserRequest: CreateUserRequest): Promise<UserResponse> {
    const user = this.userRepository.create(createUserRequest);

    const userByEmail = await this.findOneByEmail(user.email);
    if (userByEmail) {
      throw new UserAlreadyExistsException(userByEmail.email);
    }
    const userByUsername = await this.findOneByEmail(user.username);
    if (userByUsername) {
      throw new UserAlreadyExistsException(userByUsername.username);
    }

    user.password = this.cryptoService.encrypt(user.password);

    const insertedUser = (await this.userRepository.insert(user))
      .generatedMaps[0] as UserResponse;
    return insertedUser;
  }

  findAll(): Promise<UserResponse[]> {
    return this.userRepository.find();
  }

  findMany(options: FindManyRequest): Promise<UserResponse[]> {
    return this.userRepository.find({ where: options });
  }

  findOneByUuid(uuid: string): Promise<UserResponse> {
    return this.userRepository.findOne({ where: { uuid } });
  }

  findOneByEmail(email: string): Promise<UserResponse> {
    return this.userRepository.findOne({ where: { email } });
  }

  findOneByUsername(username: string): Promise<UserResponse> {
    return this.userRepository.findOne({ where: { username } });
  }

  async update(
    uuid: string,
    updateUserDto: UpdateUserRequest,
  ): Promise<UserResponse> {
    const user = this.findOneByUuid(uuid);
    if (!user) {
      throw new UserNotFoundException(uuid);
    }
    const updatedUser = (
      await this.userRepository.update({ uuid }, updateUserDto)
    ).generatedMaps[0] as UserResponse;
    return updatedUser;
  }

  async remove(uuid: string): Promise<{ deletedRowsNum: number }> {
    const user = this.findOneByUuid(uuid);
    if (!user) {
      throw new UserNotFoundException(uuid);
    }
    const deletedRowsNum = (await this.userRepository.delete({ uuid }))
      .affected;
    return { deletedRowsNum };
  }
}
