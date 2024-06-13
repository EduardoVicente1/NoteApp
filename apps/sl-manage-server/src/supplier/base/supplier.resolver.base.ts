/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Supplier } from "./Supplier";
import { SupplierCountArgs } from "./SupplierCountArgs";
import { SupplierFindManyArgs } from "./SupplierFindManyArgs";
import { SupplierFindUniqueArgs } from "./SupplierFindUniqueArgs";
import { CreateSupplierArgs } from "./CreateSupplierArgs";
import { UpdateSupplierArgs } from "./UpdateSupplierArgs";
import { DeleteSupplierArgs } from "./DeleteSupplierArgs";
import { InventoryItemFindManyArgs } from "../../inventoryItem/base/InventoryItemFindManyArgs";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { SupplierService } from "../supplier.service";
@graphql.Resolver(() => Supplier)
export class SupplierResolverBase {
  constructor(protected readonly service: SupplierService) {}

  async _suppliersMeta(
    @graphql.Args() args: SupplierCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Supplier])
  async suppliers(
    @graphql.Args() args: SupplierFindManyArgs
  ): Promise<Supplier[]> {
    return this.service.suppliers(args);
  }

  @graphql.Query(() => Supplier, { nullable: true })
  async supplier(
    @graphql.Args() args: SupplierFindUniqueArgs
  ): Promise<Supplier | null> {
    const result = await this.service.supplier(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Supplier)
  async createSupplier(
    @graphql.Args() args: CreateSupplierArgs
  ): Promise<Supplier> {
    return await this.service.createSupplier({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Supplier)
  async updateSupplier(
    @graphql.Args() args: UpdateSupplierArgs
  ): Promise<Supplier | null> {
    try {
      return await this.service.updateSupplier({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Supplier)
  async deleteSupplier(
    @graphql.Args() args: DeleteSupplierArgs
  ): Promise<Supplier | null> {
    try {
      return await this.service.deleteSupplier(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [InventoryItem], { name: "inventoryItems" })
  async findInventoryItems(
    @graphql.Parent() parent: Supplier,
    @graphql.Args() args: InventoryItemFindManyArgs
  ): Promise<InventoryItem[]> {
    const results = await this.service.findInventoryItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
