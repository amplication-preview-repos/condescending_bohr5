import { JsonValue } from "type-fest";
import { Edge } from "../edge/Edge";
import { Flow } from "../flow/Flow";

export type Node = {
  content: JsonValue;
  createdAt: Date;
  edge?: Edge | null;
  flow?: Flow | null;
  id: string;
  updatedAt: Date;
};
