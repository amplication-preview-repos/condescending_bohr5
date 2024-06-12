import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const IntegrationServiceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="serviceName" source="serviceName" />
      </SimpleForm>
    </Create>
  );
};
