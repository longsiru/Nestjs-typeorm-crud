import { Injectable } from '@nestjs/common';
//引入
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//引入实体。
import { Article } from '../../entity/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) //获取当前实体
    private readonly articleRepository: Repository<Article>, //把model赋值给articleRepository这个变量。
  ) {}

  //查找数据。
  async findAll() {
    return await this.articleRepository.find();
  }
}
