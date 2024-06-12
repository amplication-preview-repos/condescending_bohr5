import { Module } from "@nestjs/common";
import { EdgeModuleBase } from "./base/edge.module.base";
import { EdgeService } from "./edge.service";
import { EdgeController } from "./edge.controller";
import { EdgeResolver } from "./edge.resolver";

@Module({
  imports: [EdgeModuleBase],
  controllers: [EdgeController],
  providers: [EdgeService, EdgeResolver],
  exports: [EdgeService],
})
export class EdgeModule {}
