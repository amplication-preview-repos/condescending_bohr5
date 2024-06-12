import { Bot } from "../bot/Bot";
import { Node } from "../node/Node";

export type Flow = {
  bot?: Bot | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  nodes?: Array<Node>;
  updatedAt: Date;
};
