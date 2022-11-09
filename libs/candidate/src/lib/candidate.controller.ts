import { Controller, Get, Param } from '@nestjs/common';
import { Message } from '@rlrecrute/api-interfaces';
import { CandidateService } from './candidate.service';

@Controller('candidates')
export class CandidateController {
  constructor(private candidateService: CandidateService) {}

  @Get('/')
  findAll() {
    return this.candidateService.findAll();
  }

  @Get('/createOne')
  createOne() {
    return this.candidateService.createOne();
  }

  @Get('/removeAll')
  removeAll() {
    return this.candidateService.removeAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.candidateService.findOne(id);
  }
}
