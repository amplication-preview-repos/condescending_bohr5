import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NodeTitle } from "../node/NodeTitle";

export const EdgeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fromNode" source="fromNode" />
        <ReferenceArrayInput
          source="nodes"
          reference="Node"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NodeTitle} />
        </ReferenceArrayInput>
        <TextInput label="toNode" source="toNode" />
      </SimpleForm>
    </Edit>
  );
};
