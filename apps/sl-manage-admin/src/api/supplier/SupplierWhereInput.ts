import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";

export type SupplierWhereInput = {
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  inventoryItems?: InventoryItemListRelationFilter;
  name?: StringNullableFilter;
};
