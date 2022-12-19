import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';
import { JwtPayload } from 'src/auth/JWT/payload.interface';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import EditUserDto from './dto/editUser.dto';
import User from './entity/user.entity';
import { OAuth2Client } from 'google-auth-library';
import { ForgotPasswordDto } from 'src/auth/dto/forgotPassword.dto';
import RegisterDto from 'src/auth/dto/register.dto';
import NewPwDto from './dto/newPw.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,

        @Inject(forwardRef(() => AuthService))
        public authService: AuthService,


    ) { }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(username: string): Promise<User> {
        const user = await this.usersRepository.findOneBy({ username });
        if (user) {
            return user;
        }
        throw new HttpException('User Name does not exist', HttpStatus.NOT_FOUND);
    }

    async findThisUser(username: string): Promise<User> {
        const user = await this.usersRepository.findOneBy({ username });
        return user;
    }

    async updateUser(username: string, data: EditUserDto) {
        await this.usersRepository.update({ username }, data);
        return this.findThisUser(username);
    }

    async create(userData: CreateUserDto) {
        // const newUser = await this.usersRepository.create(userData);
        await this.usersRepository.save(userData);
        return userData;
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async update(id: number, editUserDto: EditUserDto) {
        const user = await this.usersRepository.findOneBy({ id });
        user.role = editUserDto.role;
        user.image = editUserDto.image;
        user.email = editUserDto.email;
        user.username = editUserDto.username;
        const updatedUsername = this.usersRepository.save(user);
        return updatedUsername
    }

    async getUser(
        page = 1
    ) {
        const user = await this.usersRepository.find(
            {
                skip: 10 * (page - 1),
                take: 10,
            }
        )
        return user;
    }


    async sendEmailForgotPassword(email: string): Promise<void> {
        var userFromDb = await this.usersRepository.findOneBy({ email: email });

        const APP_PORT = 3001
        const APP_HOST = 'localhost'
        const GOOGLE_MAILER_CLIENT_ID = '49503388661-df69vuns5r99pl1hlsn1k05gejck6gof.apps.googleusercontent.com'
        const GOOGLE_MAILER_CLIENT_SECRET = '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'
        const GOOGLE_MAILER_REFRESH_TOKEN = '1//04u9W8-AxjJV9CgYIARAAGAQSNwF-L9IrnrLy6akYyxPw4YoFCJaXXruxHH8znaHzGWYHl4Qg91irdFpAnHmBKiPOwdbzXd7T_R8'
        const ADMIN_EMAIL_ADDRESS = 'ma.quy1987@gmail.com'

        const myOAuth2Client = new OAuth2Client(
            GOOGLE_MAILER_CLIENT_ID,
            GOOGLE_MAILER_CLIENT_SECRET
        )
        myOAuth2Client.setCredentials({
            refresh_token: GOOGLE_MAILER_REFRESH_TOKEN
        })

        const myAccessTokenObject = await myOAuth2Client.getAccessToken()
        const myAccessToken = myAccessTokenObject?.token
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: ADMIN_EMAIL_ADDRESS,
                clientId: GOOGLE_MAILER_CLIENT_ID,
                clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
                refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
                accessToken: myAccessToken
            }
        })

        if (userFromDb) {
            let forgotToken = (Math.floor(Math.random() * (9000000)) + 1000000).toString();
            userFromDb.forgotToken = forgotToken;
            await this.usersRepository.save(userFromDb);

            let mailOptions = {
                from: '"Company" <' + 'me' + '>',
                to: email, // list of receivers (separated by ,)
                subject: 'Forgotten Password',
                text: 'Forgot Password',
                html: 'Hi! <br><br> If you requested to reset your password<br><br>' +
                    `http://${APP_HOST}:${APP_PORT}/auth/email/reset-password/${forgotToken}`,
            };
            await transport.sendMail(mailOptions)
        } else { throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND); }
    }

    async setNewPassword(newPwDto: NewPwDto): Promise<void> {
        const user = await this.usersRepository.findOneBy({ forgotToken: newPwDto.forgotToken })
        if (user) {
            const hasedPassword = await bcrypt.hash(newPwDto.password, 10);
            user.password = hasedPassword;
            user.forgotToken = "";
            await this.usersRepository.save(user);

        } else {
            throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
        }

    }
}