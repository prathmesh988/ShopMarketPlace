import { Injectable } from '@nestjs/common';
import prisma from '@repo/database';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getProducts() {
    // return await prisma.product.findMany();
    
    // let Products = await prisma.product.findMany();
    

    return [
      {
        seller: 'seller 1',
        Products: [{
          image: 'https://heroui.com/images/album-cover.png',
          title: 'Product 1',
          price: '$10.00',
          reviews: 10,
          isAvailable: true,
          Product: 'ProductDummy'
        },
        {
          image: 'https://heroui.com/images/album-cover.png',
          title: 'Product 2',
          price: '$10.00',
          reviews: 10,
          isAvailable: true,
          Product: 'ProductDummy'
        }, {
          image: 'https://heroui.com/images/album-cover.png',
          title: 'Product 3',
          price: '$10.00',
          reviews: 10,
          isAvailable: true,
          Product: 'ProductDummy'
        },
    
        ]
      }
      , {
        seller: 'seller 2',
        Products: [{
          image: 'https://heroui.com/images/album-cover.png',
          title: 'Product 1',
          price: '$10.00',
          reviews: 10,
          isAvailable: true,
          Product: 'ProductDummy'
        },
        {
          image: 'https://heroui.com/images/album-cover.png',
          title: 'Product 2',
          price: '$10.00',
          reviews: 10,
          isAvailable: true,
          Product: 'ProductDummy'
        }, {
          image: 'https://heroui.com/images/album-cover.png',
          title: 'Product 3',
          price: '$10.00',
          reviews: 10,
          isAvailable: true,
          Product: 'ProductDummy'
        },
    
        ]
      }
    ]
  
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
