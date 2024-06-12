import { EdgeWhereInput } from "./EdgeWhereInput";
import { EdgeOrderByInput } from "./EdgeOrderByInput";

export type EdgeFindManyArgs = {
  where?: EdgeWhereInput;
  orderBy?: Array<EdgeOrderByInput>;
  skip?: number;
  take?: number;
};
