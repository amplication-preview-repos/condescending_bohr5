import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { NodeUpdateManyWithoutFlowsInput } from "./NodeUpdateManyWithoutFlowsInput";

export type FlowUpdateInput = {
  bot?: BotWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  nodes?: NodeUpdateManyWithoutFlowsInput;
};
