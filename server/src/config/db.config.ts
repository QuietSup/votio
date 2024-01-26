import { TypeOrmModule } from '@nestjs/typeorm';
import { PollAnswer } from 'src/modules/poll-answers/entities/poll-answer.entity';
import { PollsAnswerOption } from 'src/modules/polls-answer-options/entities/polls-answer-option.entity';
import { Poll } from 'src/modules/polls/entities/poll.entity';
import { Survey } from 'src/modules/surveys/entities/survey.entity';
import { User } from 'src/modules/users/entities/user.entity';

export const dbConfigModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  entities: [User, Survey, Poll, PollAnswer, PollsAnswerOption],
  database: process.env.DB_NAME,
  synchronize: true,
  // logging: true,
});
