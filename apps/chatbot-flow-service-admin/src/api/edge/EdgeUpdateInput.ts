import { NodeUpdateManyWithoutEdgesInput } from "./NodeUpdateManyWithoutEdgesInput";

export type EdgeUpdateInput = {
  fromNode?: string | null;
  nodes?: NodeUpdateManyWithoutEdgesInput;
  toNode?: string | null;
};
