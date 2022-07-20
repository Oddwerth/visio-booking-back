import {IsArray, IsEmail, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateFollowerDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly contactMail: string;

  @IsArray()
  @IsNotEmpty()
  readonly language: string[];
}
