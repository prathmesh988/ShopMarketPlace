import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Post('products')
  createProduct(
    @Body() data: { name: string; price: number; description?: string },
  ) {
    return this.appService.createProduct(data);
  }
}
