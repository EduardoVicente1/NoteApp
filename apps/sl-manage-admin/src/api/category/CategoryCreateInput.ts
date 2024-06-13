import { InventoryItemCreateNestedManyWithoutCategoriesInput } from "./InventoryItemCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  inventoryItems?: InventoryItemCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
