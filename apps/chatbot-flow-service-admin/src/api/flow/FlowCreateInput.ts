import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { NodeCreateNestedManyWithoutFlowsInput } from "./NodeCreateNestedManyWithoutFlowsInput";

export type FlowCreateInput = {
  bot?: BotWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  nodes?: NodeCreateNestedManyWithoutFlowsInput;
};
