import { PartialType } from '@nestjs/mapped-types';
import { CreatePollDto } from './create-poll.dto';

export class UpdatePollDto {
  question?: string;
}
