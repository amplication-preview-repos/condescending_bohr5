import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BotTitle } from "../bot/BotTitle";
import { NodeTitle } from "../node/NodeTitle";

export const FlowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="bot.id" reference="Bot" label="Bot">
          <SelectInput optionText={BotTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="nodes"
          reference="Node"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NodeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
