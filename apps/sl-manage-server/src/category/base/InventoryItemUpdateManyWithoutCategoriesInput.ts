/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InventoryItemWhereUniqueInput } from "../../inventoryItem/base/InventoryItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InventoryItemUpdateManyWithoutCategoriesInput {
  @Field(() => [InventoryItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryItemWhereUniqueInput],
  })
  connect?: Array<InventoryItemWhereUniqueInput>;

  @Field(() => [InventoryItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryItemWhereUniqueInput],
  })
  disconnect?: Array<InventoryItemWhereUniqueInput>;

  @Field(() => [InventoryItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryItemWhereUniqueInput],
  })
  set?: Array<InventoryItemWhereUniqueInput>;
}

export { InventoryItemUpdateManyWithoutCategoriesInput as InventoryItemUpdateManyWithoutCategoriesInput };
