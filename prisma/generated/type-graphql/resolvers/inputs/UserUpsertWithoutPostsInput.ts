import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateWithoutPostsInput } from "../inputs/UserUpdateWithoutPostsInput";

@InputType("UserUpsertWithoutPostsInput", {
  isAbstract: true
})
export class UserUpsertWithoutPostsInput {
  @Field(_type => UserUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostsInput;

  @Field(_type => UserCreateWithoutPostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostsInput;
}
