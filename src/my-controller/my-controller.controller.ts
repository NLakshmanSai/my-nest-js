import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyControllerService } from './my-controller.service';
import { CreateMyControllerDto } from './dto/create-my-controller.dto';
import { UpdateMyControllerDto } from './dto/update-my-controller.dto';

@Controller('my-controller')
export class MyControllerController {
  constructor(private readonly myControllerService: MyControllerService) {}

  @Post()
  create(@Body() createMyControllerDto: CreateMyControllerDto) {
    return this.myControllerService.create(createMyControllerDto);
  }

  @Get()
  findAll() {
    return this.myControllerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myControllerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyControllerDto: UpdateMyControllerDto) {
    return this.myControllerService.update(+id, updateMyControllerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myControllerService.remove(+id);
  }
}
