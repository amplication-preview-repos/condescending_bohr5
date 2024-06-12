import { Node as TNode } from "../api/node/Node";

export const NODE_TITLE_FIELD = "id";

export const NodeTitle = (record: TNode): string => {
  return record.id?.toString() || String(record.id);
};
