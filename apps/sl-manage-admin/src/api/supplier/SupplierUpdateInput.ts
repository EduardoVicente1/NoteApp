import { InventoryItemUpdateManyWithoutSuppliersInput } from "./InventoryItemUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  contactInformation?: string | null;
  inventoryItems?: InventoryItemUpdateManyWithoutSuppliersInput;
  name?: string | null;
};
