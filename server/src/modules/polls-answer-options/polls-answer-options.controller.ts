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
import { PollsAnswerOptionsService } from './polls-answer-options.service';
import { CreatePollsAnswerOptionDto } from './dto/create-polls-answer-option.dto';
import { UpdatePollsAnswerOptionDto } from './dto/update-polls-answer-option.dto';
import { FindAllPollsAnswerOptionDto } from './dto/find-all-polls-answer-option.dto';

@Controller('polls-answer-options')
export class PollsAnswerOptionsController {
  constructor(
    private readonly pollsAnswerOptionsService: PollsAnswerOptionsService,
  ) {}

  @Post()
  create(@Body() createPollsAnswerOptionDto: CreatePollsAnswerOptionDto) {
    return this.pollsAnswerOptionsService.create(createPollsAnswerOptionDto);
  }

  @Get()
  findAll(@Query() options: FindAllPollsAnswerOptionDto) {
    return this.pollsAnswerOptionsService.findAll(options);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.pollsAnswerOptionsService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updatePollsAnswerOptionDto: UpdatePollsAnswerOptionDto,
  ) {
    return this.pollsAnswerOptionsService.update(
      uuid,
      updatePollsAnswerOptionDto,
    );
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.pollsAnswerOptionsService.remove(uuid);
  }
}
