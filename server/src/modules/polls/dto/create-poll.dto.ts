import { PollsAnswerOption } from 'src/modules/polls-answer-options/entities/polls-answer-option.entity';
import { Survey } from 'src/modules/surveys/entities/survey.entity';

export class CreatePollDto {
  question: string;
  surveyUuid: number;
}
