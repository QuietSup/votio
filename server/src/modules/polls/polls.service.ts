import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Poll } from './entities/poll.entity';
import { Repository } from 'typeorm';
import { FindAllPollsDto } from './dto/find-all-polls.dto';

@Injectable()
export class PollsService {
  constructor(
    @InjectRepository(Poll)
    private pollsRepository: Repository<Poll>,
  ) {}

  async create(createPollDto: CreatePollDto): Promise<Poll> {
    const insertedUuid = (await this.pollsRepository.insert(createPollDto))
      .identifiers[0].uuid;

    return this.findOne(insertedUuid);
  }

  findAll(options: FindAllPollsDto): Promise<Poll[]> {
    const queryBuilder = this.pollsRepository.createQueryBuilder();

    if (options.questionSubstr) {
      queryBuilder.andWhere('question LIKE %:questionSubstr%', {
        questionSubstr: options.questionSubstr,
      });
    }
    if (options.surveyUuid) {
      queryBuilder.andWhere('surveyUuid = :surveyUuid', {
        surveyUuid: options.surveyUuid,
      });
    }
    return queryBuilder.getMany();
  }

  findOne(uuid: string): Promise<Poll> {
    return this.pollsRepository.findOne({ where: { uuid } });
  }

  async update(uuid: string, updatePollDto: UpdatePollDto): Promise<Poll> {
    const poll = await this.findOne(uuid);
    if (!poll) {
      throw new NotFoundException();
    }
    poll.question = updatePollDto.question;

    return this.pollsRepository.save(poll);
  }

  async remove(uuid: string): Promise<boolean> {
    const poll = await this.findOne(uuid);
    if (!poll) {
      throw new NotFoundException();
    }
    const deletedRows = (await this.pollsRepository.delete(uuid)).affected;
    return deletedRows != null;
  }
}
