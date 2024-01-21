import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUserInputEnvelope } from "../inputs/PostCreateManyUserInputEnvelope";
import { PostCreateOrConnectWithoutUserInput } from "../inputs/PostCreateOrConnectWithoutUserInput";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutUserInput } from "../inputs/PostUpdateManyWithWhereWithoutUserInput";
import { PostUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PostUpdateWithWhereUniqueWithoutUserInput";
import { PostUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PostUpsertWithWhereUniqueWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class PostUpdateManyWithoutUserNestedInput {
  @Field(_type => [PostCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostCreateWithoutUserInput[] | undefined;

  @Field(_type => [PostCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[] | undefined;

  @Field(_type => [PostUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @Field(_type => PostCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyUserInputEnvelope | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @Field(_type => [PostUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @Field(_type => [PostUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutUserInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
