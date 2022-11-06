import { Injectable } from '@nestjs/common';
import { CandidateEntity } from './candidate.entity';

@Injectable()
export class CandidateService {
  findAll(): Promise<CandidateEntity[]> {
    return CandidateEntity.find();
  }

  createOne(): Promise<CandidateEntity> {
    return CandidateEntity.create({
      email: 'user@example.com',
      firstName: 'Eugene',
      lastName: 'Sincovschi',
    }).save();
  }

  findOne(id: string) {
    return CandidateEntity.findOne({
      where: {
        id,
      },
    });
  }

  async removeAll() {
    return CandidateEntity.remove(await this.findAll());
  }
}
