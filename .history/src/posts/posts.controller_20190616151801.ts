import { Controller, Get, Req } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  index(@Req() request){
    console.log(request.ip);
    console.log(request.hostname);
    console.log(request.method);
    return [
      {
        title:'hello, my friend!'
      }
    ]
  }
}
