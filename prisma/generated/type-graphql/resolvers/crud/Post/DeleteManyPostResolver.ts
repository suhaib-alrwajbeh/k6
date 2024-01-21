import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";
import { Post } from "../../../models/Post";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class DeleteManyPostResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).post.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
