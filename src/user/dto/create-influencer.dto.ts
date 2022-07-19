import {IsArray, IsEmail, IsNotEmpty, IsString, Max, MaxLength} from "class-validator";

export class CreateInfluencerDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly userName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly contactMail: string;

  @IsArray()
  @IsString()
  @IsNotEmpty()
  readonly socialMediaPlatform: string[];

  @IsString()
  @MaxLength(30)
  readonly aliasSocialMedia: string;
}
