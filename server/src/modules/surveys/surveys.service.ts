import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSurveyRequest } from './dto/create-survey.request';
import { UpdateSurveyRequest } from './dto/update-survey.request';
import {
  DeepPartial,
  DeleteResult,
  FindOptionsWhere,
  LessThan,
  Repository,
} from 'typeorm';
import { Survey } from './entities/survey.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllSurveysRequest } from './dto/find-all-surveys.request';
import { UsersService } from '../users/users.service';

@Injectable()
export class SurveysService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,

    private usersService: UsersService,
  ) {}

  async create(createSurveyRequest: CreateSurveyRequest): Promise<Survey> {
    const survey = this.surveyRepository.create(createSurveyRequest);
    survey.user = await this.usersService.findOneByUuid(
      createSurveyRequest.userUuid,
    );

    const insertedUuid = (await this.surveyRepository.insert(survey))
      .identifiers[0].uuid as string;

    return this.findOne(insertedUuid);
  }

  findAll(options: FindAllSurveysRequest): Promise<Survey[]> {
    let surveysQueryBuilder =
      this.surveyRepository.createQueryBuilder('surveys');

    if (options.substring) {
      surveysQueryBuilder = surveysQueryBuilder.andWhere(
        'title LIKE %:substr%',
        { substr: options.substring },
      );
    }
    if (options.authRequired !== undefined) {
      surveysQueryBuilder = surveysQueryBuilder.andWhere(
        'authRequired IS :authRequired',
        {
          authRequired: options.authRequired,
        },
      );
    }
    if (options.userUuid) {
      surveysQueryBuilder = surveysQueryBuilder.andWhere('uuid = :userUuid', {
        userUuid: options.userUuid,
      });
    }
    if (options.fromStartTime) {
      surveysQueryBuilder = surveysQueryBuilder.andWhere(
        'startTime >= :fromStartTime',
        {
          fromStartTime: options.fromStartTime,
        },
      );
    }
    if (options.toStartTime) {
      surveysQueryBuilder = surveysQueryBuilder.andWhere(
        'startTime <= :toStartTime',
        {
          toStartTime: options.toStartTime,
        },
      );
    }
    if (options.fromEndTime) {
      surveysQueryBuilder = surveysQueryBuilder.andWhere(
        'endTime >= :fromEndTime',
        {
          fromEndTime: options.fromEndTime,
        },
      );
    }
    if (options.toEndTime) {
      surveysQueryBuilder = surveysQueryBuilder.andWhere(
        'endTime <= :toEndTime',
        {
          toEndTime: options.toEndTime,
        },
      );
    }

    return surveysQueryBuilder.getMany();
  }

  findOne(uuid: string) {
    return this.surveyRepository.findOne({ where: { uuid } });
  }

  async update(
    uuid: string,
    updateSurveyRequest: UpdateSurveyRequest,
  ): Promise<Survey> {
    const survey = await this.findOne(uuid);
    if (!survey) {
      throw new NotFoundException();
    }

    const updatedUuid = (
      await this.surveyRepository.update(uuid, updateSurveyRequest)
    ).generatedMaps[0].uuid as string;

    return this.findOne(updatedUuid);
  }

  async remove(uuid: string): Promise<boolean> {
    const survey = await this.findOne(uuid);
    if (!survey) {
      throw new NotFoundException();
    }
    const affectedRaws = (await this.surveyRepository.delete(uuid)).affected;
    return affectedRaws != null;
  }
}
