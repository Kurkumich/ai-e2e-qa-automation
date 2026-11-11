import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { RunsController } from './runs/runs.controller';
import { RunsService } from './runs/runs.service';

@Module({
  controllers: [HealthController, RunsController],
  providers: [RunsService],
})
export class AppModule {}

