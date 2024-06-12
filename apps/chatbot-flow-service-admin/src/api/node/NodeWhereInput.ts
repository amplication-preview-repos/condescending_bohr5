import { JsonFilter } from "../../util/JsonFilter";
import { EdgeWhereUniqueInput } from "../edge/EdgeWhereUniqueInput";
import { FlowWhereUniqueInput } from "../flow/FlowWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type NodeWhereInput = {
  content?: JsonFilter;
  edge?: EdgeWhereUniqueInput;
  flow?: FlowWhereUniqueInput;
  id?: StringFilter;
};
