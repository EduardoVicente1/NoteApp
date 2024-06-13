import { Category } from "../category/Category";
import { Supplier } from "../supplier/Supplier";

export type InventoryItem = {
  category?: Category | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  name: string | null;
  price: number | null;
  quantity: number | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
