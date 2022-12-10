import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUser(id: number): Promise<Omit<User, 'hash'>> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: +id,
      },
    });
    delete user.hash;
    return user;
  }
}
