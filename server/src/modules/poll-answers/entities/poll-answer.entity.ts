import { PollsAnswerOption } from 'src/modules/polls-answer-options/entities/polls-answer-option.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { TimeRecord } from 'src/parent-entities/time-record.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PollAnswer extends TimeRecord {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ManyToOne(
    () => PollsAnswerOption,
    (pollsAnswerOption) => pollsAnswerOption.pollAnswers,
    {
      onDelete: 'CASCADE',
    },
  )
  pollsAnswerOption: PollsAnswerOption;

  @ManyToOne(() => User, (user) => user.pollAnswers, {
    onDelete: 'CASCADE',
  })
  user: User;
}
