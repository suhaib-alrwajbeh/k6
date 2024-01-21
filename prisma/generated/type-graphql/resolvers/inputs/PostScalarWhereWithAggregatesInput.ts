import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumStatusWithAggregatesFilter } from "../inputs/EnumStatusWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("PostScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PostScalarWhereWithAggregatesInput {
  @Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @Field(_type => EnumStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumStatusWithAggregatesFilter | undefined;

  @Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntNullableWithAggregatesFilter | undefined;
}
