import { Controller, Get, Post, UseGuards, Request, Body, Delete, Patch, Param, Req, ValidationPipe, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ForgotPasswordDto } from 'src/auth/dto/forgotPassword.dto';
import RegisterDto from 'src/auth/dto/register.dto';
import { HasRoles } from 'src/auth/has-roles.decorator';
import { ResponseError, ResponseSuccess } from 'src/auth/interface/response.dto';
import { IResponse } from 'src/auth/interface/response.interface';
import { JwtAuthGuard } from 'src/auth/JWT/jwt-auth.guard';
import { JwtPayload } from 'src/auth/JWT/payload.interface';
import { RolesGuard } from 'src/auth/roles.guard';
import NewProductDto from 'src/product/dto/newProduct.dto';
import { ProductService } from 'src/product/product.service';
import EditUserDto from './dto/editUser.dto';
import NewPwDto from './dto/newPw.dto';
import User, { Role } from './entity/user.entity';
import { Userde } from './users.decorator';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService,
        private authService: AuthService,
        // private productService: ProductService,

    ) { }

    @HasRoles(Role.User)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('users/profile/')
    async getProfile(@Req() req: any): Promise<JwtPayload> {
        return req.user;
    }

    @HasRoles(Role.User)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('users/profile/editProfile')
    async editProfile(
        @Userde() { username }: User,
        @Body()
        data: EditUserDto,
    ) {
        return this.usersService.updateUser(username, data);
    }


    // @HasRoles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Get('admin')
    // getAdmin(@Request() req) {
    //     return this.usersService.findAll();
    // }

    // @HasRoles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('admin')
    getAdmin(@Query('page') page: number) {
        return this.usersService.getUser(page);
    }

    // @Get('admin')
    // getAdmin() {
    //     return this.usersService.getUser()
    // }

    // @HasRoles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Post('admin/createNewProduct')
    // createNewProduct(@Body()
    // newProductDto: NewProductDto
    // ) {
    //     return this.newProductDto.createProduct();
    // }

    // @HasRoles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('admin/createNewUser')
    async createNewUser(@Body() registrationData: RegisterDto) {
        return this.authService.register(registrationData);
    }

    // @HasRoles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete('admin/deleteUser/:id')
    async deleteUser(@Param('id') id: number) {
        return this.usersService.remove(id);
    }

    // @HasRoles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    @Patch('admin/editUser/:id')
    update(@Param('id') id: number, @Body() editUserDto: EditUserDto) {
        return this.usersService.update(id, editUserDto);
    }

    @Get('/forgot-password')
    public async sendEmailForgotPassword(@Query() query: { email: string }): Promise<IResponse> {
        try {
            var isEmailSent = await this.usersService.sendEmailForgotPassword(query.email);

        } catch (error) {
            return new ResponseError("LOGIN.ERROR.SEND_EMAIL", error);
        }
    }

    @Post('/reset-password')
    async setPassword(@Body() newPwDto: NewPwDto) {
        return this.usersService.setNewPassword(newPwDto)
    }
}
