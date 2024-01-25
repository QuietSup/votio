import { Survey } from 'src/modules/surveys/entities/survey.entity';
import { TimeRecord } from 'src/parent-entities/time-record.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends TimeRecord {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true, nullable: true })
  username?: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  firstname?: string;

  @Column({ nullable: true })
  lastname?: string;

  @Column()
  password: string;

  @OneToMany(() => Survey, (survey) => survey.user)
  surveys: Survey[];
}
