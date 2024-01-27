import { Module } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { SurveysController } from './surveys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Survey]), UsersModule],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule {}
