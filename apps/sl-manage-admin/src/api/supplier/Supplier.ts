import { InventoryItem } from "../inventoryItem/InventoryItem";

export type Supplier = {
  contactInformation: string | null;
  createdAt: Date;
  id: string;
  inventoryItems?: Array<InventoryItem>;
  name: string | null;
  updatedAt: Date;
};
