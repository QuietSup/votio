import { PollAnswer } from 'src/modules/poll-answers/entities/poll-answer.entity';
import { Poll } from 'src/modules/polls/entities/poll.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PollsAnswerOption {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  text: string;

  @ManyToOne(() => Poll, (poll) => poll.pollsAnswerOptions, {
    onDelete: 'CASCADE',
  })
  poll: Poll;

  @OneToMany(() => PollAnswer, (pollAnswer) => pollAnswer.pollsAnswerOption)
  pollAnswers: PollAnswer[];
}
