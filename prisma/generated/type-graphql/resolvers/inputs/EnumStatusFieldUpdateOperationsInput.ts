import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@InputType("EnumStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumStatusFieldUpdateOperationsInput {
  @Field(_type => Status, {
    nullable: true
  })
  set?: "PUBLISHED" | "PENDING" | undefined;
}
