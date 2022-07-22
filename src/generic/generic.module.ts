import { Module } from '@nestjs/common';
import {GenericService} from "./generic.service";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [GenericService],
  exports: [GenericService]
})
export class GenericModule {}
