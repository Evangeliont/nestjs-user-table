import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.save({ ...updateUserDto, id });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async resetProblems(): Promise<{ updatedCount: number }> {
    const usersWithProblems = await this.userRepository.find({
      where: { hasproblems: true },
    });
    const updatedCount = usersWithProblems.length;

    await this.userRepository.update(
      { hasproblems: true },
      { hasproblems: false },
    );

    return { updatedCount };
  }

  async countProblems(): Promise<{ count: number }> {
    const count = await this.userRepository.count({
      where: { hasproblems: true },
    });
    return { count };
  }
}
