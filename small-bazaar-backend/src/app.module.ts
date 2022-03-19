import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { Items } from './Entities/items.entity';
import { Cart } from './Entities/cart.entity';
import { UserModule } from './user/user.module';
import { register } from './Entities/register.entity';
import { Login } from './Entities/login.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'items2',
      entities: [Items, Cart, register, Login],
      synchronize: true,
    }),
    ItemsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
