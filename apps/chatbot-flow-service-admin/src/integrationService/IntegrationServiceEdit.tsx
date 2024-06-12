import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const IntegrationServiceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="serviceName" source="serviceName" />
      </SimpleForm>
    </Edit>
  );
};
