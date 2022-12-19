import { Body, Controller, Ip, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import SaveCartDto from './dto/saveCart.dto';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }


    @Post()
    async saveCartItem(@Ip() ip, @Body() saveCartdto: SaveCartDto) {
        return this.cartService.saveCart(ip, saveCartdto)
    }
}
