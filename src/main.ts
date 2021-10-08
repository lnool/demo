import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { ResultInterceptor } from './common/interceptor/ResultInterceptor';
import { ResultExceptionFilter } from './common/filter/ResultExceptionFilter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // 通过Nest工厂创建服务
  const app = await NestFactory.create(AppModule);

  // 注册拦截器
  app.useGlobalInterceptors(new ResultInterceptor());
  // 注册过滤器
  app.useGlobalFilters(new ResultExceptionFilter());

  // Swagger
  const options = new DocumentBuilder()
    .setTitle('Itemall API文档')
    .setDescription('This is 《Itemall》 API docuemnt')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // 跨域
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
