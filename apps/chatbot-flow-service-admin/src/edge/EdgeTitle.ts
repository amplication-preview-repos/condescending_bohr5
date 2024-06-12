import { Edge as TEdge } from "../api/edge/Edge";

export const EDGE_TITLE_FIELD = "fromNode";

export const EdgeTitle = (record: TEdge): string => {
  return record.fromNode?.toString() || String(record.id);
};
