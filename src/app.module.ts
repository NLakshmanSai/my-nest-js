import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyControllerModule } from './my-controller/my-controller.module';

@Module({
  imports: [MyControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
