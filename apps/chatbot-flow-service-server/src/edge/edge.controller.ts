import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EdgeService } from "./edge.service";
import { EdgeControllerBase } from "./base/edge.controller.base";

@swagger.ApiTags("edges")
@common.Controller("edges")
export class EdgeController extends EdgeControllerBase {
  constructor(protected readonly service: EdgeService) {
    super(service);
  }
}
