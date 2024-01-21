import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUserInputEnvelope } from "../inputs/PostCreateManyUserInputEnvelope";
import { PostCreateOrConnectWithoutUserInput } from "../inputs/PostCreateOrConnectWithoutUserInput";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class PostCreateNestedManyWithoutUserInput {
  @Field(_type => [PostCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostCreateWithoutUserInput[] | undefined;

  @Field(_type => [PostCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[] | undefined;

  @Field(_type => PostCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUserInputEnvelope | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
