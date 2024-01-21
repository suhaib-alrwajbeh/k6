import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumStatusFilter } from "../inputs/EnumStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("PostScalarWhereInput", {
  isAbstract: true
})
export class PostScalarWhereInput {
  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  AND?: PostScalarWhereInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  OR?: PostScalarWhereInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  NOT?: PostScalarWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @Field(_type => EnumStatusFilter, {
    nullable: true
  })
  status?: EnumStatusFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  userId?: IntNullableFilter | undefined;
}
