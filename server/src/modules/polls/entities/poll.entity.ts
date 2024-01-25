import { PollsAnswerOption } from 'src/modules/polls-answer-options/entities/polls-answer-option.entity';
import { Survey } from 'src/modules/surveys/entities/survey.entity';
import { TimeRecord } from 'src/parent-entities/time-record.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Poll extends TimeRecord {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  question: string;

  @ManyToOne(() => Survey, (survey) => survey.polls, {
    onDelete: 'CASCADE',
  })
  survey: Survey;

  @OneToMany(
    () => PollsAnswerOption,
    (pollsAnswerOption) => pollsAnswerOption.poll,
  )
  pollsAnswerOptions: PollsAnswerOption[];
}
