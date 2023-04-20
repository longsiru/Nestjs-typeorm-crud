import { Controller, Delete, Get } from '@nestjs/common';
import { NavService } from '../../../../service/nav/nav.service';
import { json } from 'stream/consumers';

@Controller('admin/nav')
export class NavController {
  constructor(private navService: NavService) {}

  //查找数据
  @Get()
  async index() {
    return await this.navService.findAll();
  }

  //增加数据，暂时用get，真正做项目的时候用post
  /*
  @Get('add')
  async add() {
    return await this.navService.add();
  }
  */

  //用json来添加。
  @Get('add')
  async add() {
    return await this.navService.add({
      title: 'luntan2',
      url: 'ccc.ccc.com',
      description: 'c',
      status: 1,
    });
  }

  //update
  @Get('update')
  async update() {
    return await this.navService.update({ id: 4 }, { title: 'nestjsclass' });
  }

  //delete
  @Get('remove')
  async remove() {
    return await this.navService.remove({ id: 3 });
  }
}
