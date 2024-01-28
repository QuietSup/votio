import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { PollsService } from './polls.service';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { FindAllPollsDto } from './dto/find-all-polls.dto';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Post()
  create(@Body() createPollDto: CreatePollDto) {
    return this.pollsService.create(createPollDto);
  }

  @Get()
  findAll(
    @Query(new ValidationPipe({ transform: true })) options: FindAllPollsDto,
  ) {
    return this.pollsService.findAll(options);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.pollsService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updatePollDto: UpdatePollDto) {
    return this.pollsService.update(uuid, updatePollDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.pollsService.remove(uuid);
  }
}
