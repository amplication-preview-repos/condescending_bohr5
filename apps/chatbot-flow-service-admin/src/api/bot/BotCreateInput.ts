import { FlowCreateNestedManyWithoutBotsInput } from "./FlowCreateNestedManyWithoutBotsInput";

export type BotCreateInput = {
  flows?: FlowCreateNestedManyWithoutBotsInput;
  name?: string | null;
};
