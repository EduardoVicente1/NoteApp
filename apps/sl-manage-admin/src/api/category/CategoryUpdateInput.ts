import { InventoryItemUpdateManyWithoutCategoriesInput } from "./InventoryItemUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  inventoryItems?: InventoryItemUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
