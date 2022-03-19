import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Items } from './../Entities/items.entity';
import { Cart } from './../Entities/cart.entity';
import { Login } from './../Entities/login.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items)
    private readonly itemsRepository: Repository<Items>,
    @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}

  async createItem(data: Items) {
    return await this.itemsRepository.save(data);
  }

  async getItems() {
    return await this.itemsRepository.find();
  }

  async addItemsIntoCart(data: Cart, email: string) {
    const getUser = await this.loginRepository.findOne({ email: email });
    const cartdata = new Cart();
    cartdata.login = getUser;
    const datacart = Object.assign(data, cartdata);
    console.log(datacart);

    return await this.cartRepository.insert(datacart);
  }

  async getCartItems() {
    return await this.cartRepository.find();
  }

  async getCartItemsByEmail(email: string) {
    const getUser = await this.loginRepository.findOne({ email: email });
    const catItems = await getManager().query(
      `select * from cart where loginId=${getUser.id}`,
    );
    if (getUser) {
      return catItems;
    } else {
      throw new NotFoundException('no items avaliable in the cart');
    }
  }
}
