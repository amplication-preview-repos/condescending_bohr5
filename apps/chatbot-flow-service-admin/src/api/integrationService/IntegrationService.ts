import { JsonValue } from "type-fest";

export type IntegrationService = {
  apiDetails: JsonValue;
  createdAt: Date;
  id: string;
  serviceName: string | null;
  updatedAt: Date;
};
