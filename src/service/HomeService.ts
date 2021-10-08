import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Banner } from '../entity/Banner';
import { InjectRepository } from '@nestjs/typeorm';
import { Recommend } from '../entity/Recommend';
import { Goods } from '../entity/Goods';
import { PAGING } from '../constant';
import { Detail } from '../entity/Detail';
import { Result } from "../entity/Result";

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>,
    @InjectRepository(Recommend)
    private readonly recommendRepository: Repository<Recommend>,
    @InjectRepository(Goods)
    private readonly goodsRepository: Repository<Goods>,
    @InjectRepository(Detail)
    private readonly detailRepository: Repository<Detail>,
  ) {}

  /**
   * 查询轮播 热门数据
   */
  async query() {
    const banners: Banner[] = await this.bannerRepository.find();
    const recommend: Recommend[] = await this.recommendRepository.find();
    return {
      banners,
      recommend,
    };
  }

  /**
   * 查询商品分页数据
   * @param page 页码数
   * @param type 商品类型
   */
  queryGoods({ page = 1, type = 'new' }) {
    const skip = (page - 1) * PAGING.TAKE;
    return this.goodsRepository.find({
      skip,
      take: PAGING.TAKE,
      where: { type },
    });
  }

  /**
   * 根据iid查询商品的详情信息
   * @param iid
   */
  queryDetail(iid: string) {
    return this.detailRepository.findOne({
      where: { iid },
    });
  }
}
