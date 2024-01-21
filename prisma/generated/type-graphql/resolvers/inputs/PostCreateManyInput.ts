import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@InputType("PostCreateManyInput", {
  isAbstract: true
})
export class PostCreateManyInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;

  @Field(_type => Status, {
    nullable: true
  })
  status?: "PUBLISHED" | "PENDING" | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  userId?: number | undefined;
}
