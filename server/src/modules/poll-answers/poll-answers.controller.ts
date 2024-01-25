import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PollAnswersService } from './poll-answers.service';
import { CreatePollAnswerDto } from './dto/create-poll-answer.dto';
import { UpdatePollAnswerDto } from './dto/update-poll-answer.dto';

@Controller('poll-answers')
export class PollAnswersController {
  constructor(private readonly pollAnswersService: PollAnswersService) {}

  @Post()
  create(@Body() createPollAnswerDto: CreatePollAnswerDto) {
    return this.pollAnswersService.create(createPollAnswerDto);
  }

  @Get()
  findAll() {
    return this.pollAnswersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollAnswersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePollAnswerDto: UpdatePollAnswerDto) {
    return this.pollAnswersService.update(+id, updatePollAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollAnswersService.remove(+id);
  }
}
