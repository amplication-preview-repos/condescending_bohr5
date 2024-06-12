import { Node } from "../node/Node";

export type Edge = {
  createdAt: Date;
  fromNode: string | null;
  id: string;
  nodes?: Array<Node>;
  toNode: string | null;
  updatedAt: Date;
};
