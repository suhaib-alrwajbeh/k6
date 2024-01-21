import { Injectable } from '@nestjs/common';
import { UserCreateInput } from 'prisma/generated/type-graphql/resolvers/inputs';
import { PrismaService } from 'src/Prisma/prisma.service';

@Injectable()
export class UserService {

    constructor(private prismaService: PrismaService) { }

    async createOneUser(userCreateInput: UserCreateInput) {
        return await this.prismaService.user.create({
            data: {
                name: userCreateInput.name,
                email: userCreateInput.email,
                posts: userCreateInput.posts
            }
        });
    }

    async getUser(id: number) {
        return await this.prismaService.user.findUnique({
            where: {
                id: id
            }
        })
    }
}
