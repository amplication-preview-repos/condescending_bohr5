import { FlowUpdateManyWithoutBotsInput } from "./FlowUpdateManyWithoutBotsInput";

export type BotUpdateInput = {
  flows?: FlowUpdateManyWithoutBotsInput;
  name?: string | null;
};
