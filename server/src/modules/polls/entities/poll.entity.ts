import { Survey } from 'src/modules/surveys/entities/survey.entity';
import { TimeRecord } from 'src/parent-entities/time-record.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Poll extends TimeRecord {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  question: string;

  @OneToMany(() => Survey, (survey) => survey.polls)
  survey: Survey;
}
