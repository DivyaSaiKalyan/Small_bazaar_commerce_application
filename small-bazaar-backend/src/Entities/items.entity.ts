import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  itemName: string;

  @Column()
  @ApiProperty()
  itemPrice: number;

  @Column()
  @ApiProperty()
  itemCategory: string;

  @ApiProperty()
  @Column()
  itemUrl: string;
}
