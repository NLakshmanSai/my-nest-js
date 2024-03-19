import { Module } from '@nestjs/common';
import { MyControllerService } from './my-controller.service';
import { MyControllerController } from './my-controller.controller';

@Module({
  controllers: [MyControllerController],
  providers: [MyControllerService],
})
export class MyControllerModule {}
