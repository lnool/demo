import { Controller, Get, Param, Query } from '@nestjs/common';
import { HomeService } from '../service/HomeService';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('home')
@ApiTags('首页模块')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @ApiOperation({ summary: '查询首页数据' })
  @Get()
  query() {
    return this.homeService.query();
  }

  @ApiOperation({ summary: '查询商品数据' })
  @Get('queryGoods')
  queryGoods(@Query() query) {
    return this.homeService.queryGoods(query);
  }

  @ApiOperation({ summary: '查询商品详情信息' })
  @Get('detail/:iid')
  queryDetail(@Param('iid') iid: string) {
    return this.homeService.queryDetail(iid);
  }
}
