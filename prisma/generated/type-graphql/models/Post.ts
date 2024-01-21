import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { Status } from "../enums/Status";

@ObjectType("Post", {
  isAbstract: true
})
export class Post {
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

  user?: User | null;

  @Field(_type => Int, {
    nullable: true
  })
  userId?: number | null;
}
