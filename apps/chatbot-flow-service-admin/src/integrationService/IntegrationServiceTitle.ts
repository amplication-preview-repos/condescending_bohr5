import { IntegrationService as TIntegrationService } from "../api/integrationService/IntegrationService";

export const INTEGRATIONSERVICE_TITLE_FIELD = "serviceName";

export const IntegrationServiceTitle = (
  record: TIntegrationService
): string => {
  return record.serviceName?.toString() || String(record.id);
};
