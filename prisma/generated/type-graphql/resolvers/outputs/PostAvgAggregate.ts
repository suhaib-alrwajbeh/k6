import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("PostAvgAggregate", {
  isAbstract: true
})
export class PostAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  id!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  userId!: number | null;
}
