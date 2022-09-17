import {Body, Param, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dtos/product.dto';

@Controller('products')
export class ProductsController {

    constructor(private readonly ProductsService: ProductsService){}

    @Get()
    async getAll() : Promise <Product[]> {
        return this.ProductsService.getProducts();
    }

    @Post()
    async create(@Body() ProductDto: CreateProductDto){
        await this.ProductsService.addProduct(ProductDto)
    }

    @Delete('/:id')
    async DelById(@Param() id : String) {
        await this.ProductsService.delProduct(id)
    }

    @Put()
    async ModById(@Body() object ){
        const {id} =object
        delete object.id
        const product:CreateProductDto = object
        await this.ProductsService.modProduct(id,product)
    }
}
