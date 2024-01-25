import { Module } from '@nestjs/common';
import { PollAnswersService } from './poll-answers.service';
import { PollAnswersController } from './poll-answers.controller';

@Module({
  controllers: [PollAnswersController],
  providers: [PollAnswersService],
})
export class PollAnswersModule {}
