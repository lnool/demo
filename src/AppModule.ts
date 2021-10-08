import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { HomeModule } from './module/HomeModule';
import { CategoryModule } from './module/CategoryModule';

@Module({
  imports: [
    HomeModule,
    CategoryModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
  ],
})
export class AppModule {}
