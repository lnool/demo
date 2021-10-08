import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from '../service/CategoryService';

@Controller('category')
@ApiTags('分类模块')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiOperation({ summary: '查询分类' })
  queryCategory() {
    return this.categoryService.queryCategory();
  }

  @Get('subcategory/:maitKey')
  @ApiOperation({ summary: '查询分类列表' })
  querySubcategory(@Param('maitKey') maitKey: string) {
    return this.categoryService.querySubcategory(maitKey);
  }
}
