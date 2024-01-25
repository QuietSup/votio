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
    nullable: true,
    onDelete: 'CASCADE',
  })
  user: User;
}
