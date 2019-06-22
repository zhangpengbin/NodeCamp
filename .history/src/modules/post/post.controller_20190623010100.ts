import { Controller, Post, Body } from '@nestjs/common';
import { PostService } from 'dist/modules/post/post.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService:PostService
  ){}


  @Post()
  async store(@Body() data){
    return await this.postService.store(data);
  }
}
