import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './entities/poll.entity';
import { SurveysModule } from '../surveys/surveys.module';

@Module({
  imports: [TypeOrmModule.forFeature([Poll]), SurveysModule],
  controllers: [PollsController],
  providers: [PollsService],
})
export class PollsModule {}
