import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(uuid: string) {
    super(`User with uuid ${uuid} not found`, HttpStatus.NOT_FOUND);
  }
}
