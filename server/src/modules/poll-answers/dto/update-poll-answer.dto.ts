import { PartialType } from '@nestjs/mapped-types';
import { CreatePollAnswerDto } from './create-poll-answer.dto';

export class UpdatePollAnswerDto extends PartialType(CreatePollAnswerDto) {}
