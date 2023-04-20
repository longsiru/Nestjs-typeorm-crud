import { Controller, Get } from '@nestjs/common';
import { NavService } from '../../../../service/nav/nav.service';

@Controller('admin/nav')
export class NavController {
  constructor(private navService: NavService) {}

  @Get()
  async index() {
    return await this.navService.findAll();
  }
}
