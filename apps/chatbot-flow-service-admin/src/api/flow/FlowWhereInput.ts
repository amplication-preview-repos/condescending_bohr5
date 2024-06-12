import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NodeListRelationFilter } from "../node/NodeListRelationFilter";

export type FlowWhereInput = {
  bot?: BotWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  nodes?: NodeListRelationFilter;
};
