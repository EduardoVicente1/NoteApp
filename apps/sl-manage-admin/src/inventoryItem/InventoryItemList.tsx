import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const InventoryItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InventoryItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
