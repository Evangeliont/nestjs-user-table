import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserActionService } from './user-action.service';
import { UserActionController } from './user-action.controller';
import { UserAction } from './user-action.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserAction]),
    EventEmitterModule.forRoot(),
  ],
  providers: [UserActionService],
  controllers: [UserActionController],
})
export class UserActionModule {}
