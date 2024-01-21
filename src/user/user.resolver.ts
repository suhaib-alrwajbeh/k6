import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, UserCreateInput } from 'prisma/generated/type-graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Mutation(() => User)
  createUser(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.userService.createOneUser(userCreateInput);
  }

  @Query(() => User)
  getUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUser(id);
  }
}
