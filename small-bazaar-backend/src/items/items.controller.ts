import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './../Entities/items.entity';
import { Cart } from './../Entities/cart.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post('createItem')
  async createItem(@Body() data: Items) {
    return await this.itemService.createItem(data);
  }

  @Get('getall')
  async getItems() {
    return await this.itemService.getItems();
  }

  @Post('/addCartItems/:email')
  async addItemsIntoCart(@Body() data: Cart, @Param('email') email: string) {
    return await this.itemService.addItemsIntoCart(data, email);
  }

  @Get('getcartItems')
  async getCartItems() {
    return await this.itemService.getCartItems();
  }

  @Get('getcartItemsByEmail/:email')
  async getCartItemsByEmail(@Param('email') email: string) {
    return await this.itemService.getCartItemsByEmail(email);
  }
}
