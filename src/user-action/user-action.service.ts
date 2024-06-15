import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAction } from './user-action.entity';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserActionService {
  constructor(
    @InjectRepository(UserAction)
    private readonly userActionRepository: Repository<UserAction>,
  ) {}

  async create(userId: number, action: string): Promise<UserAction> {
    const userAction = this.userActionRepository.create({ userId, action });
    return this.userActionRepository.save(userAction);
  }

  async findActions(
    userId: number,
    page: number,
    limit: number,
  ): Promise<UserAction[]> {
    return this.userActionRepository.find({
      where: { userId },
      take: limit,
      skip: (page - 1) * limit,
    });
  }

  @OnEvent('user.created')
  handleUserCreatedEvent(event: any) {
    this.create(event.id, 'created');
  }

  @OnEvent('user.updated')
  handleUserUpdatedEvent(event: any) {
    this.create(event.id, 'updated');
  }
}
