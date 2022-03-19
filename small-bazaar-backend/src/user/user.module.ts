import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { register } from './../Entities/register.entity';
import { Login } from './../Entities/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([register, Login])],

  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
