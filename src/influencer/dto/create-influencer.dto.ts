import {IsArray, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class CreateInfluencerDto {
  @IsString()
  @MaxLength(30)
  @MinLength(4)
  @IsNotEmpty()
  readonly userName: string;

  @IsString()
  @MaxLength(30)
  @MinLength(8)
  @IsNotEmpty()
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly contactMail: string;

  @IsArray()
  @IsNotEmpty()
  readonly socialMediaPlatform: string[];

  @IsString()
  @MaxLength(30)
  readonly aliasSocialMedia: string;
}
