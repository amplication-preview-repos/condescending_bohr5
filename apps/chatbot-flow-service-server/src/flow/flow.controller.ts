import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlowService } from "./flow.service";
import { FlowControllerBase } from "./base/flow.controller.base";

@swagger.ApiTags("flows")
@common.Controller("flows")
export class FlowController extends FlowControllerBase {
  constructor(protected readonly service: FlowService) {
    super(service);
  }
}
