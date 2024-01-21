import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostAvgOrderByAggregateInput } from "../inputs/PostAvgOrderByAggregateInput";
import { PostCountOrderByAggregateInput } from "../inputs/PostCountOrderByAggregateInput";
import { PostMaxOrderByAggregateInput } from "../inputs/PostMaxOrderByAggregateInput";
import { PostMinOrderByAggregateInput } from "../inputs/PostMinOrderByAggregateInput";
import { PostSumOrderByAggregateInput } from "../inputs/PostSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("PostOrderByWithAggregationInput", {
  isAbstract: true
})
export class PostOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  userId?: SortOrderInput | undefined;

  @Field(_type => PostCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostCountOrderByAggregateInput | undefined;

  @Field(_type => PostAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostAvgOrderByAggregateInput | undefined;

  @Field(_type => PostMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostMaxOrderByAggregateInput | undefined;

  @Field(_type => PostMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostMinOrderByAggregateInput | undefined;

  @Field(_type => PostSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostSumOrderByAggregateInput | undefined;
}
