import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostgresModule } from './../postgres/postgres.module';
import { CandidateModule } from '@rlrecrute/candidate';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
      exclude: ['/api*'],
    }),
    PostgresModule,
    CandidateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
