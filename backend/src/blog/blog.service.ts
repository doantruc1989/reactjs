import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entity/blog.entity';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>,
    ) { }

    async getAllBlog() {
        return await this.blogRepository.find()
    }

    async getBlogById(id: number) {
        const blog = await this.blogRepository.findOneBy({ id })
        return blog
    }
}
