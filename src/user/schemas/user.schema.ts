import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userName: string

  @Prop()
  name: string

  @Prop()
  firstName: string

  @Prop()
  contactMail: string

  // Social Network
  @Prop()
  socialMediaPlatform: string[]

  // Name Social Network
  @Prop()
  aliasSocialMedia: string

  @Prop()
  description1: string

  @Prop()
  description2: string

  @Prop()
  description3: string

  @Prop()
  photo: string[]

  @Prop()
  language: string[]

  @Prop()
  country: string

  @Prop()
  manager: string

  @Prop()
  managerEmail: string

  @Prop()
  tags: string[]
}

export const UserSchema = SchemaFactory.createForClass(User)
