import * as graphql from "@nestjs/graphql";
import { FlowResolverBase } from "./base/flow.resolver.base";
import { Flow } from "./base/Flow";
import { FlowService } from "./flow.service";

@graphql.Resolver(() => Flow)
export class FlowResolver extends FlowResolverBase {
  constructor(protected readonly service: FlowService) {
    super(service);
  }
}
