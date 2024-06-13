import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type InventoryItemCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  dueDate?: Date | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
};
