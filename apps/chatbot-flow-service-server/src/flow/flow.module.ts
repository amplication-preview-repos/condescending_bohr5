import { Module } from "@nestjs/common";
import { FlowModuleBase } from "./base/flow.module.base";
import { FlowService } from "./flow.service";
import { FlowController } from "./flow.controller";
import { FlowResolver } from "./flow.resolver";

@Module({
  imports: [FlowModuleBase],
  controllers: [FlowController],
  providers: [FlowService, FlowResolver],
  exports: [FlowService],
})
export class FlowModule {}
