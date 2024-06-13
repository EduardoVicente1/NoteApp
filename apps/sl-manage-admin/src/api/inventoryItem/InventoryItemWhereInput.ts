import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type InventoryItemWhereInput = {
  category?: CategoryWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  supplier?: SupplierWhereUniqueInput;
};
