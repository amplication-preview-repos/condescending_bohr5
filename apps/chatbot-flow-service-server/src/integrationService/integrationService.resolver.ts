import * as graphql from "@nestjs/graphql";
import { IntegrationServiceResolverBase } from "./base/integrationService.resolver.base";
import { IntegrationService } from "./base/IntegrationService";
import { IntegrationServiceService } from "./integrationService.service";

@graphql.Resolver(() => IntegrationService)
export class IntegrationServiceResolver extends IntegrationServiceResolverBase {
  constructor(protected readonly service: IntegrationServiceService) {
    super(service);
  }
}
