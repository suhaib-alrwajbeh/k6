import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class PostRelationsResolver {
  @ResolveField(_type => User, {
    nullable: true
  })
  async user(@Root() post: Post, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).post.findUniqueOrThrow({
      where: {
        id: post.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
