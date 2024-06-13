import { StringFilter } from "../../util/StringFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  inventoryItems?: InventoryItemListRelationFilter;
  name?: StringNullableFilter;
};
