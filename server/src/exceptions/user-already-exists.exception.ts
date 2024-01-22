import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor(email: string) {
    super(`User already exists: @${email}`, HttpStatus.CONFLICT);
  }
}
