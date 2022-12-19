import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import RegisterDto from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService,
        private jwtService: JwtService,

    ) { }

    async register(registrationData: RegisterDto) {
        const hasedPassword = await bcrypt.hash(registrationData.password, 10);
        try {
            const createUser = await this.usersService.create({
                ...registrationData,
                password: hasedPassword
            });
            createUser.password = undefined;

            return createUser;
        } catch (error) {
            throw new HttpException('This username has already existed', HttpStatus.BAD_REQUEST);
        }
    }

    async getAuthenticatedUser(username: string, plainTextPassword: string) {
        try {
            const user = await this.usersService.findOne(username);
            await this.verifyPassword(plainTextPassword, user.password);
            return user;
        } catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
        const isPasswordMatching = await bcrypt.compare(
            plainTextPassword,
            hashedPassword
        );
        if (!isPasswordMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id, roles: user.role };
        return {
            access_token: this.jwtService.sign(payload),
            roles: [user.role],
            id: user.id
        };
    }


}