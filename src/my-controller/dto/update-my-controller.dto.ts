import { PartialType } from '@nestjs/mapped-types';
import { CreateMyControllerDto } from './create-my-controller.dto';

export class UpdateMyControllerDto extends PartialType(CreateMyControllerDto) {}
