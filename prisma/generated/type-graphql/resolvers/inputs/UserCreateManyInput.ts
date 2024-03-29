import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("UserCreateManyInput", {
  isAbstract: true
})
export class UserCreateManyInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;
}
