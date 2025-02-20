import { Injectable } from '@nestjs/common';
import prisma from '@repo/database';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    return await prisma.user.findMany();
  }

  async createUser(data: { name: string; email: string }) {
    return await prisma.user.create({
      data,
    });
  }
}
