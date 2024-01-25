import { Test, TestingModule } from '@nestjs/testing';
import { PollsAnswerOptionsService } from './polls-answer-options.service';

describe('PollsAnswerOptionsService', () => {
  let service: PollsAnswerOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollsAnswerOptionsService],
    }).compile();

    service = module.get<PollsAnswerOptionsService>(PollsAnswerOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
