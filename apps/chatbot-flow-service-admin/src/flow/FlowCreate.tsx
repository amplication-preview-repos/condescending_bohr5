import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BotTitle } from "../bot/BotTitle";
import { NodeTitle } from "../node/NodeTitle";

export const FlowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
