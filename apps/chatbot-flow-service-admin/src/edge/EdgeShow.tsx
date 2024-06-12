import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EDGE_TITLE_FIELD } from "./EdgeTitle";
import { FLOW_TITLE_FIELD } from "../flow/FlowTitle";

export const EdgeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fromNode" source="fromNode" />
        <TextField label="ID" source="id" />
        <TextField label="toNode" source="toNode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Node" target="edgeId" label="Nodes">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
