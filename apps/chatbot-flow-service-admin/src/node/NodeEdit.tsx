import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EdgeTitle } from "../edge/EdgeTitle";
import { FlowTitle } from "../flow/FlowTitle";

export const NodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="edge.id" reference="Edge" label="edge">
          <SelectInput optionText={EdgeTitle} />
        </ReferenceInput>
        <ReferenceInput source="flow.id" reference="Flow" label="flow">
          <SelectInput optionText={FlowTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
