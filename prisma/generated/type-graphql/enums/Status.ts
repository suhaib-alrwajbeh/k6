import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum Status {
  PUBLISHED = "PUBLISHED",
  PENDING = "PENDING"
}
registerEnumType(Status, {
  name: "Status",
  description: undefined,
});
