import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NodeListRelationFilter } from "../node/NodeListRelationFilter";

export type EdgeWhereInput = {
  fromNode?: StringNullableFilter;
  id?: StringFilter;
  nodes?: NodeListRelationFilter;
  toNode?: StringNullableFilter;
};
