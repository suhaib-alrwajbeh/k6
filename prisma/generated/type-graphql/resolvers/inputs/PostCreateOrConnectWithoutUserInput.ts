import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class PostCreateOrConnectWithoutUserInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostCreateWithoutUserInput;
}
