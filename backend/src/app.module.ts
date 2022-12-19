import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import User from './users/entity/user.entity';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/entity/product.entity';
import { CartModule } from './cart/cart.module';
import { Category } from './product/entity/category';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/entity/blog.entity';

@Module({

  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'db3',
    entities: [User, Product, Category, Blog],
    synchronize: true,
  }), ProductModule, CartModule, BlogModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
