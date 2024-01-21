import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { UserCount } from "../resolvers/outputs/UserCount";

@ObjectType("User", {
  isAbstract: true
})
export class User {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  posts?: Post[];

  @Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
