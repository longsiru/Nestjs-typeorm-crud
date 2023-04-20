import { Injectable } from '@nestjs/common';
//引入
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//引入实体。
import { Nav } from './../../entity/nav.entity';

//i引入接口
import { NavInterface } from './../../interface/nav/nav.interface';

//在service里面获取模型。
@Injectable()
export class NavService {
  constructor(
    @InjectRepository(Nav) //获取当前实体
    private readonly navRepository: Repository<Nav>, //把model赋值给articleRepository这个变量。
  ) {}

  async findAll(json: NavInterface = {}) {
    //return await this.navRepository.findOneBy(json);
    //return await this.navRepository.findByIds([1, 2]);
    //用 sql语句来查询
    return await this.navRepository.query('select * from nav where id=1');
  }

  //增加
  //增加多条的话，可以写循环来增加。
  //增加的话首先需要实例化实体，实例化完了之后给实体增加数据。
  /*
  async add() {
    //增加的话首先需要实例化实体，实例化完了之后给实体增加数据。
    var nav = new Nav();
    //实体其实就是一个类。
    nav.title = '论坛';
    nav.url = 'bbb.bbb.com';
    nav.description = 'c';
    nav.status = 2;
    //增加完数据之后，调用repository。用save方法将实体传入save方法。然后去控制器写一个add的方法。
    return await this.navRepository.save(nav);
  }
  */

  //外部传入也是可以的
  async add(json: NavInterface) {
    var nav = new Nav();
    nav.title = json.title;
    nav.url = json.url;
    nav.description = json.description;
    nav.status = json.status;
    return await this.navRepository.save(nav);
  }

  //update
  async update(json1: NavInterface, json2: NavInterface) {
    //首先需要获取数据
    var oneNav = await this.navRepository.findOneBy(json1);

    // oneNav.title = 'luntan3333333333';
    json2.title ? (oneNav.title = json2.title) : '';
    json2.url ? (oneNav.url = json2.url) : '';
    json2.description ? (oneNav.description = json2.description) : '';
    json2.status ? (oneNav.status = json2.status) : '';

    return this.navRepository.save(oneNav);
  }

  //delete
  //首先要找到要删除的数据，然后删除。
  async remove(json: NavInterface) {
    //首先需要获取数据
    var oneNav = await this.navRepository.findOneBy(json);

    return this.navRepository.remove(oneNav);
  }
}
