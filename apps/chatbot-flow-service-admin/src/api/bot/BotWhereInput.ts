import { FlowListRelationFilter } from "../flow/FlowListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BotWhereInput = {
  flows?: FlowListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
