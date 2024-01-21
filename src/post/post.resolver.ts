import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { type } from 'os';
import { Post } from 'prisma/generated/type-graphql';
import { PostCreateInput } from 'prisma/generated/type-graphql/resolvers/inputs';


import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) { }

  @Mutation(() => Post)
  createPost(@Args('postCreateInput') postCreateInput: PostCreateInput) {
    return this.postService.createPost(postCreateInput);
  }
  @Query(() => [Post])
  getAllActivePostsByUserId(
    @Args('userId', { type: () => Int }) userId: number,
  ) {
    return this.postService.getAllActivePostsByUserId(userId);
  }
}
