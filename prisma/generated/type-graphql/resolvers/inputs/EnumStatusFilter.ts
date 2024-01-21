import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStatusFilter } from "../inputs/NestedEnumStatusFilter";
import { Status } from "../../enums/Status";

@InputType("EnumStatusFilter", {
  isAbstract: true
})
export class EnumStatusFilter {
  @Field(_type => Status, {
    nullable: true
  })
  equals?: "PUBLISHED" | "PENDING" | undefined;

  @Field(_type => [Status], {
    nullable: true
  })
  in?: Array<"PUBLISHED" | "PENDING"> | undefined;

  @Field(_type => [Status], {
    nullable: true
  })
  notIn?: Array<"PUBLISHED" | "PENDING"> | undefined;

  @Field(_type => NestedEnumStatusFilter, {
    nullable: true
  })
  not?: NestedEnumStatusFilter | undefined;
}
