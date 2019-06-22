import { Controller } from '@nestjs/common';
import { PostService } from 'dist/modules/post/post.service';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService:PostService
  ){}
}
