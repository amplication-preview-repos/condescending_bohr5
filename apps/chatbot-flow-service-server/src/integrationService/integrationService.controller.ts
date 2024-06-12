import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationServiceService } from "./integrationService.service";
import { IntegrationServiceControllerBase } from "./base/integrationService.controller.base";

@swagger.ApiTags("integrationServices")
@common.Controller("integrationServices")
export class IntegrationServiceController extends IntegrationServiceControllerBase {
  constructor(protected readonly service: IntegrationServiceService) {
    super(service);
  }
}
