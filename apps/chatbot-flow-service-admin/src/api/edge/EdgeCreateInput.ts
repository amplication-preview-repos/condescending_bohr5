import { NodeCreateNestedManyWithoutEdgesInput } from "./NodeCreateNestedManyWithoutEdgesInput";

export type EdgeCreateInput = {
  fromNode?: string | null;
  nodes?: NodeCreateNestedManyWithoutEdgesInput;
  toNode?: string | null;
};
