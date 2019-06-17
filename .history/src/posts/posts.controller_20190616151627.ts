import { Controller, Get, Req } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  index(@Req() request){
    console.log(request);
    return [
      {
        title:'hello, my friend!'
      }
    ]
  }
}
