import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../entity/Category';
import { CategoryController } from '../controller/CategoryController';
import { CategoryService } from '../service/CategoryService';
import { Subcategory } from '../entity/Subcategory';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [TypeOrmModule.forFeature([Category, Subcategory])],
})
export class CategoryModule {}
