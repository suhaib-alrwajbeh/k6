import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
import { Status } from "../../enums/Status";

@InputType("PostCreateInput", {
  isAbstract: true
})
export class PostCreateInput {
  @Field(_type => String, {
    nullable: false
  })
  title!: string;

  @Field(_type => Status, {
    nullable: true
  })
  status?: "PUBLISHED" | "PENDING" | undefined;

  @Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutPostsInput | undefined;
}
