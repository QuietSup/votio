import { Test, TestingModule } from '@nestjs/testing';
import { PollsAnswerOptionsController } from './polls-answer-options.controller';
import { PollsAnswerOptionsService } from './polls-answer-options.service';

describe('PollsAnswerOptionsController', () => {
  let controller: PollsAnswerOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollsAnswerOptionsController],
      providers: [PollsAnswerOptionsService],
    }).compile();

    controller = module.get<PollsAnswerOptionsController>(PollsAnswerOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
