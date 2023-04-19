import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

//1.npm install --save @nestjs/typeorm typeorm mysql2
//2. app.module配置数据库连接
//3.配置entity实体
//4.在控制器对应的module中配置model。
//5.在service里面使用@injectrepository 获取数据库，odel实现操作数据库。
