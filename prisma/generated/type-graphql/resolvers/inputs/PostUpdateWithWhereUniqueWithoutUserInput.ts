import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutUserInput } from "../inputs/PostUpdateWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutUserInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PostUpdateWithoutUserInput;
}
