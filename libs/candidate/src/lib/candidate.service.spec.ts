import { Test } from '@nestjs/testing';
import { CandidateService } from './candidate.service';

describe('CandidateService', () => {
  let service: CandidateService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CandidateService],
    }).compile();

    service = module.get(CandidateService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
