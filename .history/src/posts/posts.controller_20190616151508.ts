import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  mepost(){
    return [
      {
        title:'hello, my friend!'
      }
    ]
  }
}
