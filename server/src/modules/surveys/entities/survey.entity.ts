import { Poll } from 'src/modules/polls/entities/poll.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { TimeRecord } from 'src/parent-entities/time-record.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Survey extends TimeRecord {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  title: string;

  @Column()
  authRequired: string;

  @ManyToOne(() => User, (user) => user.surveys, {
    onDelete: 'CASCADE',
  })
  user: User;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  start_time: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  endTime: Date;

  @ManyToOne(() => Poll, (poll) => poll.survey)
  polls: Poll[];
}
