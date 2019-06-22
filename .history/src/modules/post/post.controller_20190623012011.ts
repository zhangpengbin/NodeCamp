import { Controller, Post, Body, Get } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) { }


  @Post()
  async store(@Body() data) {
    return await this.postService.store(data);
  }

  @Get()
  async index() {
    return await this.postService.index();
  }
  
}
