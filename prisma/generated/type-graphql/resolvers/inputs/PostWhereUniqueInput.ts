import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("PostWhereUniqueInput", {
  isAbstract: true
})
export class PostWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;
}
