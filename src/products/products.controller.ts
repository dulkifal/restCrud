import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const genertedId = this.productsService.insetProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { genertedId };
  }
  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') productId: string) {
    return this.productsService.getSingleProduct(productId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
      this.productsService.updateProduct(
      productId,
      prodTitle,
      prodDesc,
      prodPrice,
      );
      return null;
  }
  @Delete(':id')
  removeProduct(@Param('id') prodId: string){
    this.productsService.deleteProduct(prodId)
    return null
  }
}
