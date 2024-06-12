import { FlowWhereInput } from "./FlowWhereInput";
import { FlowOrderByInput } from "./FlowOrderByInput";

export type FlowFindManyArgs = {
  where?: FlowWhereInput;
  orderBy?: Array<FlowOrderByInput>;
  skip?: number;
  take?: number;
};
