import { Controller, Post, Body } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) { }


  

}
