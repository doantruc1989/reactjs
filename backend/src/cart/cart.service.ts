import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import SaveCartDto from './dto/saveCart.dto';
import { CartItem } from './entity/cart.entity';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartItem)
        private cartRepository: Repository<CartItem>) { }

    async saveCart(ip: any, saveCartdto: SaveCartDto) {
        await this.cartRepository.save(saveCartdto)
    }
}
