import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Login } from './login.entity';

@Entity()
export class register {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  gender: string;

  @Column()
  dateofbirth: string;

  @OneToOne(() => Login, (login) => login.registerentity, { cascade: true })
  login: Login;
}
