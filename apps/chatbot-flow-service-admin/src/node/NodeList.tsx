import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EDGE_TITLE_FIELD } from "../edge/EdgeTitle";
import { FLOW_TITLE_FIELD } from "../flow/FlowTitle";

export const NodeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Nodes"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
