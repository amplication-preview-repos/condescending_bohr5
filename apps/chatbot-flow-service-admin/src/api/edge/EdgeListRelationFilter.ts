import { EdgeWhereInput } from "./EdgeWhereInput";

export type EdgeListRelationFilter = {
  every?: EdgeWhereInput;
  some?: EdgeWhereInput;
  none?: EdgeWhereInput;
};
