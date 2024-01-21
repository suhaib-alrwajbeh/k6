import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";

@ObjectType("UserCount", {
  isAbstract: true
})
export class UserCount {
  posts!: number;

  @Field(_type => Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@Root() root: UserCount, @Args() args: UserCountPostsArgs): number {
    return root.posts;
  }
}
