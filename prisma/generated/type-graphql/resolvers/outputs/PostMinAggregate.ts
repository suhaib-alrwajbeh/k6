import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@ObjectType("PostMinAggregate", {
  isAbstract: true
})
export class PostMinAggregate {
  @Field(_type => Int, {
    nullable: true
  })
  id!: number | null;

  @Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @Field(_type => Status, {
    nullable: true
  })
  status!: "PUBLISHED" | "PENDING" | null;

  @Field(_type => Int, {
    nullable: true
  })
  userId!: number | null;
}
