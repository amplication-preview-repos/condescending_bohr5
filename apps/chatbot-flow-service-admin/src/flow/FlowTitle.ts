import { Flow as TFlow } from "../api/flow/Flow";

export const FLOW_TITLE_FIELD = "name";

export const FlowTitle = (record: TFlow): string => {
  return record.name?.toString() || String(record.id);
};
