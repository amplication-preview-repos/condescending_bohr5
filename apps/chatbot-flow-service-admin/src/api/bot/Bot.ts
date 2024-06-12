import { Flow } from "../flow/Flow";

export type Bot = {
  createdAt: Date;
  flows?: Array<Flow>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
