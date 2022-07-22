import { PartialType } from '@nestjs/mapped-types';
import { CreateInfluencerDto } from './create-influencer.dto';
import {IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class UpdateInfluencerDto extends PartialType(CreateInfluencerDto) {
  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly name: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly firstName: string;

  @IsString()
  @MaxLength(400)
  @IsOptional()
  readonly description1: string;

  @IsString()
  @MaxLength(400)
  @IsOptional()
  readonly description2: string;

  @IsString()
  @MaxLength(400)
  @IsOptional()
  readonly description3: string;

  @IsArray()
  @IsOptional()
  readonly photo: string[];

  @IsArray()
  @IsOptional()
  readonly language: string[];

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly manager: string;

  @IsEmail()
  @IsOptional()
  readonly managerEmail: string;

  @IsArray()
  @IsOptional()
  readonly tags: string[];
}
