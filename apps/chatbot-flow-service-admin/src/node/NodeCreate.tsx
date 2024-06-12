import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EdgeTitle } from "../edge/EdgeTitle";
import { FlowTitle } from "../flow/FlowTitle";

export const NodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="edge.id" reference="Edge" label="edge">
          <SelectInput optionText={EdgeTitle} />
        </ReferenceInput>
        <ReferenceInput source="flow.id" reference="Flow" label="flow">
          <SelectInput optionText={FlowTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
