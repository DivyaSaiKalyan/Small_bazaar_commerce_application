import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './../Entities/items.entity';
import { Cart } from './../Entities/cart.entity';
import { Login } from './../Entities/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Items, Cart, Login])],

  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
