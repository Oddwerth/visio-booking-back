import { PartialType } from '@nestjs/mapped-types';
import { CreateFollowerDto } from './create-follower.dto';
import {IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class UpdateFollowerDto extends PartialType(CreateFollowerDto) {
  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly userName: string;
}
