import { Injectable } from '@nestjs/common';
import { PostCreateInput } from 'prisma/generated/type-graphql/resolvers/inputs';
import { PrismaService } from 'src/Prisma/prisma.service';
import { Status } from 'prisma/generated/type-graphql';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) { }

  async createPost(postCreateInput: PostCreateInput) {
    return this.prismaService.post.create({
      data: {
        title: postCreateInput.title,
        status: postCreateInput.status,
        user: postCreateInput.user,
      },
    });
  }
  async getAllActivePostsByUserId(userId: number) {
    return await this.prismaService.post.findMany({
      where: {
        userId: userId,
        status: Status.PUBLISHED,
      },
    });
  }
}
