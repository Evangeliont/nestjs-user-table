import { Controller, Get, Query } from '@nestjs/common';
import { UserActionService } from './user-action.service';

@Controller('user-actions')
export class UserActionController {
  constructor(private readonly userActionsService: UserActionService) {}

  @Get()
  async findActions(
    @Query('userId') userId: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.userActionsService.findActions(userId, page, limit);
  }
}
