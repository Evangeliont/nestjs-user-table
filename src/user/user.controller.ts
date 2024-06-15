import { Controller, Post, Body, Put, Param, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Patch('reset-problems')
  async resetProblems() {
    return this.userService.resetProblems();
  }

  @Get('count-problems')
  async countProblems() {
    return this.userService.countProblems();
  }
}
