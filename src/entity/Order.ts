import { Column, Entity } from 'typeorm';

@Entity('order', { schema: 'itemall' })
export class Order {
  @Column('varchar', { primary: true, name: 'id', length: 255 })
  id: string;

  @Column('timestamp', {
    name: 'createDateTime',
  })
  createDateTime: Date;

  @Column('timestamp', {
    name: 'updateDateTime',
  })
  updateDateTime: Date;

  @Column('int', {
    name: 'status',
    comment: '0代付款 1 已完成 2取消',
    default: () => "'0'",
  })
  status: number;

  @Column('double', { name: 'totalPrice', nullable: true, precision: 22 })
  totalPrice: number | null;

  @Column('int', { name: 'uid' })
  uid: number;

  @Column('varchar', { name: 'address', length: 255 })
  address: string;

  @Column('datetime', { name: 'delDatetime', nullable: true })
  delDatetime: Date | null;
}
