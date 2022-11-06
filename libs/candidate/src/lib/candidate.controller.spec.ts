import { Test } from '@nestjs/testing';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';

describe('CandidateController', () => {
  let controller: CandidateController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CandidateService],
      controllers: [CandidateController],
    }).compile();

    controller = module.get(CandidateController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
