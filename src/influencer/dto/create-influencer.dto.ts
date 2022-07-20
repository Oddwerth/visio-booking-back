import {IsArray, IsEmail, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateInfluencerDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly userName: string;

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
