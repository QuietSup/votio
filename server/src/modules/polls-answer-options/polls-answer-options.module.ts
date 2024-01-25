import { Module } from '@nestjs/common';
import { PollsAnswerOptionsService } from './polls-answer-options.service';
import { PollsAnswerOptionsController } from './polls-answer-options.controller';

@Module({
  controllers: [PollsAnswerOptionsController],
  providers: [PollsAnswerOptionsService],
})
export class PollsAnswerOptionsModule {}
