import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { register } from './register.entity';
import { Cart } from './cart.entity';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToOne(() => register, (registerentity) => registerentity.login)
  @JoinColumn()
  registerentity: register;

  @OneToMany(() => Cart, (cart) => cart.login)
  cart: Cart[];

  addCartInfo(cart: Cart) {
    if (this.cart == null) {
      this.cart = new Array<Cart>();
    }
    return this.cart.push(cart);
  }
}
