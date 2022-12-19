import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller()
export class BlogController {
    constructor(private blogService: BlogService) { }

    @Get('blog')
    async getAllBlog() {
        return this.blogService.getAllBlog()
    }

    @Get('blog/:id')
    async getProduct(@Param('id') id: number) {
        return this.blogService.getBlogById(id)
    }
}
