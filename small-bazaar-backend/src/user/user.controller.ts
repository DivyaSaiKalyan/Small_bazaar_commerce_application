import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { register } from './../Entities/register.entity';
import { Login } from './../Entities/login.entity';
import { RegLoginDto } from './../Entities/DTO/reglogin.dto';
import { LoginDto } from './../Entities/DTO/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() data: RegLoginDto) {
    return await this.userService.register(data);
  }

  @Post('login')
  async login(@Body() data: LoginDto) {
    try {
      return await this.userService.login(data);
    } catch (error) {
      return error;
    }
  }
}
