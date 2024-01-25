import { Test, TestingModule } from '@nestjs/testing';
import { PollAnswersController } from './poll-answers.controller';
import { PollAnswersService } from './poll-answers.service';

describe('PollAnswersController', () => {
  let controller: PollAnswersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollAnswersController],
      providers: [PollAnswersService],
    }).compile();

    controller = module.get<PollAnswersController>(PollAnswersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
