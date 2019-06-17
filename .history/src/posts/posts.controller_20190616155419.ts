import { Controller, Get, Req, Query, Param, Post, Body } from '@nestjs/common';
import { CreatePostDto } from 'dist/posts/post.dto';

@Controller('posts')
export class PostsController {
  @Get()
  // @Req request  装饰器
  // @Query query  Query装饰器
  // @Headers headers  Headers装饰器
  index(@Query() query){
    console.log('query 参数',query);


    return [
      {
        title:'hello, my friend!'
      }
    ]
  }


  @Get(':id')
  show(@Param() params){
    return {
      title:`Post ${params.id}`
    }
  }

  @Post()
  store(@Body() post: CreatePostDto){
    console.log(post.title);
  }

}
