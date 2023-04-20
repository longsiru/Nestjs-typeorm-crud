import { Injectable } from '@nestjs/common';
//引入
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//引入实体。
import { Nav } from './../../entity/nav.entity';

//在service里面获取模型。
@Injectable()
export class NavService {
  constructor(
    @InjectRepository(Nav) //获取当前实体
    private readonly navRepository: Repository<Nav>, //把model赋值给articleRepository这个变量。
  ) {}

  async findAll() {
    return await this.navRepository.find();
  }
}
