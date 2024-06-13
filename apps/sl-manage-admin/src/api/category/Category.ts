import { InventoryItem } from "../inventoryItem/InventoryItem";

export type Category = {
  createdAt: Date;
  id: string;
  inventoryItems?: Array<InventoryItem>;
  name: string | null;
  updatedAt: Date;
};
