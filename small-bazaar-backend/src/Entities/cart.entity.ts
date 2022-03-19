import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Login } from './login.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  itemName: string;

  @Column()
  @ApiProperty()
  itemPrice: number;

  @ApiProperty()
  @Column()
  itemUrl: string;

  @ManyToOne(() => Login, (login) => login.cart)
  login: Login;
}
