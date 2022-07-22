import { Document } from "mongoose";

export interface IInfluencer extends Document {
  readonly userName: string
  readonly name: string
  readonly firstName: string
  readonly password: string
  readonly contactMail: string
  readonly socialMediaPlatform: string[]
  readonly aliasSocialMedia: string
  readonly description1: string
  readonly description2: string
  readonly description3: string
  readonly photo: string[]
  readonly language: string[]
  readonly country: string
  readonly manager: string
  readonly managerEmail: string
  readonly tags: string[]
}