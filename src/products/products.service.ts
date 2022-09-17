import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import {productDao} from '../daos/daoFactory.js'

@Injectable()
export class ProductsService {

    async getProducts(): Promise<Product[]> {
        return await productDao.getAll();
    }

    async addProduct(product:Product) {
        await productDao.create(product)
    }

    async delProduct(id:String) {
        await productDao.deleteById(id)
    }

    async modProduct(id:String , product:Product){
        await productDao.modById(id,product)
    }

}
