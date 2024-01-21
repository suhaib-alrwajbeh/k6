import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumStatusFieldUpdateOperationsInput } from "../inputs/EnumStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("PostUpdateWithoutUserInput", {
  isAbstract: true
})
export class PostUpdateWithoutUserInput {
  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => EnumStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumStatusFieldUpdateOperationsInput | undefined;
}
