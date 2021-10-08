import { Module } from '@nestjs/common';
import { HomeController } from '../controller/HomeController';
import { HomeService } from '../service/HomeService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banner } from '../entity/Banner';
import { Recommend } from '../entity/Recommend';
import { Goods } from '../entity/Goods';
import { Detail } from '../entity/Detail';

@Module({
  controllers: [HomeController],
  providers: [HomeService],
  imports: [TypeOrmModule.forFeature([Banner, Recommend, Goods, Detail])],
})
export class HomeModule {}
