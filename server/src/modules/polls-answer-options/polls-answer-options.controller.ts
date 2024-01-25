import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PollsAnswerOptionsService } from './polls-answer-options.service';
import { CreatePollsAnswerOptionDto } from './dto/create-polls-answer-option.dto';
import { UpdatePollsAnswerOptionDto } from './dto/update-polls-answer-option.dto';

@Controller('polls-answer-options')
export class PollsAnswerOptionsController {
  constructor(private readonly pollsAnswerOptionsService: PollsAnswerOptionsService) {}

  @Post()
  create(@Body() createPollsAnswerOptionDto: CreatePollsAnswerOptionDto) {
    return this.pollsAnswerOptionsService.create(createPollsAnswerOptionDto);
  }

  @Get()
  findAll() {
    return this.pollsAnswerOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollsAnswerOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePollsAnswerOptionDto: UpdatePollsAnswerOptionDto) {
    return this.pollsAnswerOptionsService.update(+id, updatePollsAnswerOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollsAnswerOptionsService.remove(+id);
  }
}
