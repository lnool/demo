import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_desc', { schema: 'itemall' })
export class OrderDesc {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'oid', length: 255 })
  oid: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('double', { name: 'price', nullable: true, precision: 22 })
  price: number | null;

  @Column('varchar', { name: 'show', length: 1000 })
  show: string;

  @Column('int', { name: 'num' })
  num: number;
}
