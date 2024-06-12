import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IntegrationServiceWhereInput = {
  apiDetails?: JsonFilter;
  id?: StringFilter;
  serviceName?: StringNullableFilter;
};
