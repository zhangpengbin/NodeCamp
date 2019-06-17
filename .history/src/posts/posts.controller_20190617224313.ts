import { Controller, Get, Req, Query, Param, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from 'dist/posts/providers/demo/demo.service';

@Controller('posts')
export class PostsController {

  private readonly DemoService;

  constructor(demoService:DemoService){
    this.DemoService = demoService;
  }

  @Get()
  // @Req request  装饰器
  // @Query query  Query装饰器
  // @Headers headers  Headers装饰器
  index(@Query() query){
    console.log('query 参数',query);


    return this.DemoService.
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
