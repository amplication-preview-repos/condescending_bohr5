import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { EDGE_TITLE_FIELD } from "../edge/EdgeTitle";
import { FLOW_TITLE_FIELD } from "../flow/FlowTitle";

export const NodeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="edge" source="edge.id" reference="Edge">
          <TextField source={EDGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="flow" source="flow.id" reference="Flow">
          <TextField source={FLOW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
