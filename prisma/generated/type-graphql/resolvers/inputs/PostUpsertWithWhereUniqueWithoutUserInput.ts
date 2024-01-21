import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostUpdateWithoutUserInput } from "../inputs/PostUpdateWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutUserInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PostUpdateWithoutUserInput;

  @Field(_type => PostCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostCreateWithoutUserInput;
}
