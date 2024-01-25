import { Test, TestingModule } from '@nestjs/testing';
import { PollAnswersService } from './poll-answers.service';

describe('PollAnswersService', () => {
  let service: PollAnswersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollAnswersService],
    }).compile();

    service = module.get<PollAnswersService>(PollAnswersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
