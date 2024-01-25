import { Injectable } from '@nestjs/common';
import { CreatePollAnswerDto } from './dto/create-poll-answer.dto';
import { UpdatePollAnswerDto } from './dto/update-poll-answer.dto';

@Injectable()
export class PollAnswersService {
  create(createPollAnswerDto: CreatePollAnswerDto) {
    return 'This action adds a new pollAnswer';
  }

  findAll() {
    return `This action returns all pollAnswers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pollAnswer`;
  }

  update(id: number, updatePollAnswerDto: UpdatePollAnswerDto) {
    return `This action updates a #${id} pollAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} pollAnswer`;
  }
}
