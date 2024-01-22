import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Inject,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest } from './dto/create-user.request';
import { ExcludePasswordInterceptor } from './interceptors/exclude-password.interceptor';
import { UserResponse } from './dto/user.response';
import { UpdateUserRequest } from './dto/update-user.request';

@UseInterceptors(ExcludePasswordInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserRequest: CreateUserRequest): Promise<UserResponse> {
    return this.usersService.create(createUserRequest);
  }

  @Get()
  findAll(): Promise<UserResponse[]> {
    return this.usersService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string): Promise<UserResponse> {
    return this.usersService.findOneByUuid(uuid);
  }

  @Get('email/:email')
  findOneByEmail(@Param('email') email: string): Promise<UserResponse> {
    return this.usersService.findOneByUuid(email);
  }

  @Get('username/:username')
  findOneByUsername(
    @Param('username') username: string,
  ): Promise<UserResponse> {
    return this.usersService.findOneByUuid(username);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UpdateUserRequest,
  ): Promise<UserResponse> {
    return this.usersService.update(uuid, updateUserDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string): Promise<{ deletedRowsNum: number }> {
    return this.usersService.remove(uuid);
  }
}
