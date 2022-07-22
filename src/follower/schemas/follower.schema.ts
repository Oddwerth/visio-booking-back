import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FollowerDocument = Follower & Document;

@Schema()
export class Follower {
  @Prop()
  userName: string

  @Prop()
  name: string

  @Prop()
  firstName: string

  @Prop()
  contactMail: string

  @Prop()
  language: string[]
}

export const FollowerSchema = SchemaFactory.createForClass(Follower)
