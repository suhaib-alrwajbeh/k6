import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyUserInput } from "../inputs/PostCreateManyUserInput";

@InputType("PostCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class PostCreateManyUserInputEnvelope {
  @Field(_type => [PostCreateManyUserInput], {
    nullable: false
  })
  data!: PostCreateManyUserInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
