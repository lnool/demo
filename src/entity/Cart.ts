import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cart', { schema: 'itemall' })
export class Cart {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'uid' })
  uid: number;

  @Column('int', { name: 'gid' })
  gid: number;

  @Column('int', { name: 'num' })
  num: number;
}
