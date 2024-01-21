import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostAvgAggregate } from "../outputs/PostAvgAggregate";
import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
import { PostSumAggregate } from "../outputs/PostSumAggregate";
import { Status } from "../../enums/Status";

@ObjectType("PostGroupBy", {
  isAbstract: true
})
export class PostGroupBy {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;

  @Field(_type => Status, {
    nullable: false
  })
  status!: "PUBLISHED" | "PENDING";

  @Field(_type => Int, {
    nullable: true
  })
  userId!: number | null;

  @Field(_type => PostCountAggregate, {
    nullable: true
  })
  _count!: PostCountAggregate | null;

  @Field(_type => PostAvgAggregate, {
    nullable: true
  })
  _avg!: PostAvgAggregate | null;

  @Field(_type => PostSumAggregate, {
    nullable: true
  })
  _sum!: PostSumAggregate | null;

  @Field(_type => PostMinAggregate, {
    nullable: true
  })
  _min!: PostMinAggregate | null;

  @Field(_type => PostMaxAggregate, {
    nullable: true
  })
  _max!: PostMaxAggregate | null;
}
