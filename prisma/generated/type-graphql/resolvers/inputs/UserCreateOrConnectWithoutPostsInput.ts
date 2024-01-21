import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateOrConnectWithoutPostsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPostsInput {
  @Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(_type => UserCreateWithoutPostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostsInput;
}
