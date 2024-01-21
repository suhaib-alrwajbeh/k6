import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("PostSumAggregate", {
  isAbstract: true
})
export class PostSumAggregate {
  @Field(_type => Int, {
    nullable: true
  })
  id!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  userId!: number | null;
}
