import { Module } from '@nestjs/common';
import { TypeOrmModule } from './datasource/typeorm.module';
import { UserModule } from './user/user.module';
import { UserActionModule } from './user-action/user-action.module';

@Module({
  imports: [TypeOrmModule, UserModule, UserActionModule],
})
export class AppModule {}
