import { Document } from "mongoose";

export interface IFollower extends Document {
  readonly userName: string
  readonly name: string
  readonly firstName: string
  readonly contactMail: string
  readonly language: string[]
}