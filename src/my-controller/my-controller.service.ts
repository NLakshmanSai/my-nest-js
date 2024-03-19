import { Injectable } from '@nestjs/common';
import { CreateMyControllerDto } from './dto/create-my-controller.dto';
import { UpdateMyControllerDto } from './dto/update-my-controller.dto';

@Injectable()
export class MyControllerService {
  create(createMyControllerDto: CreateMyControllerDto) {
    return 'This action adds a new myController';
  }

  findAll() {
    return `This action returns all myController`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myController`;
  }

  update(id: number, updateMyControllerDto: UpdateMyControllerDto) {
    return `This action updates a #${id} myController`;
  }

  remove(id: number) {
    return `This action removes a #${id} myController`;
  }
}
