import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'itemall' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'nickName', comment: '昵称', length: 255 })
  nickName: string;

  @Column('varchar', { name: 'password', comment: '密码', length: 255 })
  password: string;

  @Column('int', { name: 'gander', comment: '性别' })
  gander: number;

  @Column('varchar', { name: 'phone', comment: '手机号', length: 255 })
  phone: string;

  @Column('varchar', { name: 'avatar', comment: '头像', length: 255 })
  avatar: string;

  @Column('timestamp', {
    name: 'createDatetime',
    comment: '注册时间',
  })
  createDatetime: Date;

  @Column('timestamp', {
    name: 'updateDatetime',
    comment: '修改时间',
  })
  updateDatetime: Date;

  @Column('varchar', { name: 'email', comment: '邮箱', length: 255 })
  email: string;
}
