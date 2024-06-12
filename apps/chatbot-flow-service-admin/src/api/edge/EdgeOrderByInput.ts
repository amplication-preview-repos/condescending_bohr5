import { SortOrder } from "../../util/SortOrder";

export type EdgeOrderByInput = {
  createdAt?: SortOrder;
  fromNode?: SortOrder;
  id?: SortOrder;
  toNode?: SortOrder;
  updatedAt?: SortOrder;
};
