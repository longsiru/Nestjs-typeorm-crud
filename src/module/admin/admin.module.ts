import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';

import { ArticleService } from '../../service/article/article.service';
import { NavService } from 'src/service/nav/nav.service';
//配置model -- 引入实体
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../../entity/article.entity';
//配置model --引入nav实体
import { Nav } from '../../entity/nav.entity';
import { NavController } from './controller/nav/nav.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Article, Nav])], //forFeature([Article])
  controllers: [UserController, NewsController, NavController],
  providers: [ArticleService, NavService],
})
export class AdminModule {}
