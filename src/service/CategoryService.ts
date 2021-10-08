import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../entity/Category';
import { InjectRepository } from '@nestjs/typeorm';
import { Subcategory } from '../entity/Subcategory';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Subcategory)
    private readonly subcategoryRepository: Repository<Subcategory>,
  ) {}
  /**
   * 查询商品的分类
   */
  queryCategory() {
    return this.categoryRepository.find();
  }

  /**
   * 查询分类列表
   * @param maitKey
   */
  querySubcategory(maitKey: string) {
    return this.subcategoryRepository.find({
      where: { maitKey },
    });
  }
}
