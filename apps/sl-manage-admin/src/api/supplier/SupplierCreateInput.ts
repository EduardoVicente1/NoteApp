import { InventoryItemCreateNestedManyWithoutSuppliersInput } from "./InventoryItemCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  contactInformation?: string | null;
  inventoryItems?: InventoryItemCreateNestedManyWithoutSuppliersInput;
  name?: string | null;
};
