import { Poll } from 'src/modules/polls/entities/poll.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}
