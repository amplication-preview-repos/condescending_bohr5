import { InputJsonValue } from "../../types";
import { EdgeWhereUniqueInput } from "../edge/EdgeWhereUniqueInput";
import { FlowWhereUniqueInput } from "../flow/FlowWhereUniqueInput";

export type NodeCreateInput = {
  content?: InputJsonValue;
  edge?: EdgeWhereUniqueInput | null;
  flow?: FlowWhereUniqueInput | null;
};
