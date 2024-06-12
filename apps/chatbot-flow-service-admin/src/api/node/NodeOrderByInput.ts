import { SortOrder } from "../../util/SortOrder";

export type NodeOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  edgeId?: SortOrder;
  flowId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
