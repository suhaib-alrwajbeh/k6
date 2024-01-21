import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumStatusFieldUpdateOperationsInput } from "../inputs/EnumStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutPostsNestedInput } from "../inputs/UserUpdateOneWithoutPostsNestedInput";

@InputType("PostUpdateInput", {
  isAbstract: true
})
export class PostUpdateInput {
  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => EnumStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumStatusFieldUpdateOperationsInput | undefined;

  @Field(_type => UserUpdateOneWithoutPostsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutPostsNestedInput | undefined;
}
