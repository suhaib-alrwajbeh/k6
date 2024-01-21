import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostsInput } from "../inputs/UserCreateOrConnectWithoutPostsInput";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateWithoutPostsInput } from "../inputs/UserUpdateWithoutPostsInput";
import { UserUpsertWithoutPostsInput } from "../inputs/UserUpsertWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneWithoutPostsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutPostsNestedInput {
  @Field(_type => UserCreateWithoutPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostsInput | undefined;

  @Field(_type => UserCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput | undefined;

  @Field(_type => UserUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostsInput | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(_type => UserUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPostsInput | undefined;
}
