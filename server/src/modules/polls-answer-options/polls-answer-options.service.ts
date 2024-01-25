import { Injectable } from '@nestjs/common';
import { CreatePollsAnswerOptionDto } from './dto/create-polls-answer-option.dto';
import { UpdatePollsAnswerOptionDto } from './dto/update-polls-answer-option.dto';

@Injectable()
export class PollsAnswerOptionsService {
  create(createPollsAnswerOptionDto: CreatePollsAnswerOptionDto) {
    return 'This action adds a new pollsAnswerOption';
  }

  findAll() {
    return `This action returns all pollsAnswerOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pollsAnswerOption`;
  }

  update(id: number, updatePollsAnswerOptionDto: UpdatePollsAnswerOptionDto) {
    return `This action updates a #${id} pollsAnswerOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} pollsAnswerOption`;
  }
}
