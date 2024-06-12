import { Module } from "@nestjs/common";
import { IntegrationServiceModuleBase } from "./base/integrationService.module.base";
import { IntegrationServiceService } from "./integrationService.service";
import { IntegrationServiceController } from "./integrationService.controller";
import { IntegrationServiceResolver } from "./integrationService.resolver";

@Module({
  imports: [IntegrationServiceModuleBase],
  controllers: [IntegrationServiceController],
  providers: [IntegrationServiceService, IntegrationServiceResolver],
  exports: [IntegrationServiceService],
})
export class IntegrationServiceModule {}
