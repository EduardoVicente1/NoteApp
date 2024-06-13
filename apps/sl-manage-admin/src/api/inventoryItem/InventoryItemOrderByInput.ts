import { SortOrder } from "../../util/SortOrder";

export type InventoryItemOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
