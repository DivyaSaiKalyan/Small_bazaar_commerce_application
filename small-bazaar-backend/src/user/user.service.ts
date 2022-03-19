import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { register } from './../Entities/register.entity';
import { RegLoginDto } from './../Entities/DTO/reglogin.dto';
import { Login } from './../Entities/login.entity';
import { LoginDto } from './../Entities/DTO/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(register)
    private readonly registerRepository: Repository<register>,
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}

  async register(data: RegLoginDto) {
    const reg = new register();
    const login = new Login();
    login.email = data.email;
    login.password = data.password;
    login.role = 'user';
    reg.login = login;
    const newreg = Object.assign(reg, data);
    return await this.registerRepository.save(newreg);
  }

  async login(data: LoginDto) {
    const getUser = await this.loginRepository.findOne({
      email: data.email,
      password: data.password,
    });
    if (getUser.role == 'user') {
      return {
        message: 'success',
        userdata: getUser,
      };
    } else if (getUser.role == 'admin') {
      return {
        message: 'admin',
        userdata: getUser,
      };
    } else {
      throw new UnauthorizedException('incorrect credentials');
    }
  }
}
