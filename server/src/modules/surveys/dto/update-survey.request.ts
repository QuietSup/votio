import { PartialType } from '@nestjs/mapped-types';
import { CreateSurveyRequest } from './create-survey.request';

export class UpdateSurveyRequest extends PartialType(CreateSurveyRequest) {}
