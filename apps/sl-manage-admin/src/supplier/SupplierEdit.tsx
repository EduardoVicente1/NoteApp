import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InventoryItemTitle } from "../inventoryItem/InventoryItemTitle";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="contactInformation"
          multiline
          source="contactInformation"
        />
        <ReferenceArrayInput
          source="inventoryItems"
          reference="InventoryItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
