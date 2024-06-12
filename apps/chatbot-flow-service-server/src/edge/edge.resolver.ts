import * as graphql from "@nestjs/graphql";
import { EdgeResolverBase } from "./base/edge.resolver.base";
import { Edge } from "./base/Edge";
import { EdgeService } from "./edge.service";

@graphql.Resolver(() => Edge)
export class EdgeResolver extends EdgeResolverBase {
  constructor(protected readonly service: EdgeService) {
    super(service);
  }
}
