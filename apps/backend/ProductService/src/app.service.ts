import { Injectable } from '@nestjs/common';
import prisma from '@repo/database';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getProducts() {
    return await prisma.product.findMany();
  }

  async createProduct(data: {
    name: string;
    price: number;
    description?: string;
  }) {
    return await prisma.product.create({
      data,
    });
  }
}
