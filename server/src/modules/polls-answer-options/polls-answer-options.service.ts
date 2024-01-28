import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePollsAnswerOptionDto } from './dto/create-polls-answer-option.dto';
import { UpdatePollsAnswerOptionDto } from './dto/update-polls-answer-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PollsAnswerOption } from './entities/polls-answer-option.entity';
import { Repository } from 'typeorm';
import { FindAllPollsAnswerOptionDto } from './dto/find-all-polls-answer-option.dto';

@Injectable()
export class PollsAnswerOptionsService {
  constructor(
    @InjectRepository(PollsAnswerOption)
    private pollAnswerOptionsRepository: Repository<PollsAnswerOption>,
  ) {}

  create(
    createPollsAnswerOptionDto: CreatePollsAnswerOptionDto,
  ): Promise<PollsAnswerOption> {
    const pollsAnswerOption = this.pollAnswerOptionsRepository.create(
      createPollsAnswerOptionDto,
    );
    return this.pollAnswerOptionsRepository.save(pollsAnswerOption);
  }

  findAll(options: FindAllPollsAnswerOptionDto): Promise<PollsAnswerOption[]> {
    let queryBuilder = this.pollAnswerOptionsRepository.createQueryBuilder();

    if (options.pollUuid) {
      queryBuilder = queryBuilder.andWhere('pollUuid = :pollUuid', {
        pollUuid: options.pollUuid,
      });
    }
    if (options.textSubstr) {
      queryBuilder = queryBuilder.andWhere('textSubstr LIKE %:textSubstr%', {
        textSubstr: options.textSubstr,
      });
    }
    return queryBuilder.getMany();
  }

  findOne(uuid: string): Promise<PollsAnswerOption> {
    return this.pollAnswerOptionsRepository.findOne({ where: { uuid } });
  }

  async update(
    uuid: string,
    updatePollsAnswerOptionDto: UpdatePollsAnswerOptionDto,
  ): Promise<PollsAnswerOption> {
    const pollsAnswerOption = await this.findOne(uuid);
    if (!pollsAnswerOption) {
      throw new NotFoundException();
    }
    pollsAnswerOption.text = updatePollsAnswerOptionDto.text;
    return this.pollAnswerOptionsRepository.save(pollsAnswerOption);
  }

  async remove(uuid: string) {
    const pollsAnswerOption = await this.findOne(uuid);
    if (!pollsAnswerOption) {
      throw new NotFoundException();
    }
    return this.pollAnswerOptionsRepository.remove(pollsAnswerOption);
  }
}
