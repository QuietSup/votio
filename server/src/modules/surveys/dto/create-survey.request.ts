import { Poll } from 'src/modules/polls/entities/poll.entity';
import { User } from 'src/modules/users/entities/user.entity';

export class CreateSurveyRequest {
  title: string;
  authRequired: string;
  userUuid: string;
  start_time?: Date;
  endTime?: Date;
  polls?: Poll[];
}
