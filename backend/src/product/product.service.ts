import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type } from 'os';
import { Repository } from 'typeorm';
import EditProductDto from './dto/editProduct.dto';
import NewProductDto from './dto/newProduct.dto';
import SearchCategoryDto from './dto/searchCategory.dto';
import { Product } from './entity/product.entity';
import { Category } from './entity/category';
import NewCategoryDto from './dto/newCategory.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,

        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) { }


    async createProduct(newProductDto: NewProductDto) {
        console.log(newProductDto)
        return await this.productRepository.save(newProductDto)
        // return this.usersRepository.find();
    }

    async listAllCategory() {
        return await this.categoryRepository.find()
    }

    async listProduct(page = 1) {
        const products = await this.productRepository.find({
            // skip: 12 * (page - 1),
            // take: 12,
        })
        return products
    }

    async list6Product() {
        const products = await this.productRepository.find({ take: 6 })
        return products
    }


    async getProductById(id: number) {
        const product = await this.productRepository.findOneBy({ id })
        return product
    }

    async getByCategory(name) {
        const products = await this.productRepository.find({ where: { category: name } })
        return products
    }

    async editProduct(id: number, editProductDto: EditProductDto) {
        const product = await this.productRepository.findOneBy({ id })
        console.log(product)
        product.category = editProductDto.category;
        product.content = editProductDto.content;
        product.image = editProductDto.image;
        product.price = editProductDto.price;
        product.productName = editProductDto.productName;
        product.quantity = editProductDto.quantity;
        const updatedProduct = this.productRepository.save(product);
        return updatedProduct
    }

    async deleteThisProduct(id: number) {
        try {
            await this.productRepository.delete(id)
        } catch (error) {
            if (error) {
                console.log(error)
            } else {
                console.log('deleted')
            }
        }
    }
}
