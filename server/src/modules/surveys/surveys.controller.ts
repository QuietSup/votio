import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { FindAllSurveysRequest } from './dto/find-all-surveys.request';
import { CreateSurveyRequest } from './dto/create-survey.request';
import { UpdateSurveyRequest } from './dto/update-survey.request';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @Post()
  create(@Body() CreateSurveyRequest: CreateSurveyRequest) {
    return this.surveysService.create(CreateSurveyRequest);
  }

  @Get()
  findAll(@Query() options: FindAllSurveysRequest) {
    return this.surveysService.findAll(options);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.surveysService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateSurveyDto: UpdateSurveyRequest,
  ) {
    return this.surveysService.update(uuid, updateSurveyDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.surveysService.remove(uuid);
  }
}
