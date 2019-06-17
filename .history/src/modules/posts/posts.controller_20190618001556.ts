import { Controller, Get, Req, Query, Param, Post, Body, HttpException, HttpStatus, ForbiddenException } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';

@Controller('posts')
export class PostsController {

  // private readonly demoService;
  // 依赖注入的简单形式 且可直接读取方法
  constructor(private readonly demoService: DemoService) {
    this.demoService = demoService;
  }

  @Get()
  // @Req request  装饰器
  // @Query query  Query装饰器
  // @Headers headers  Headers装饰器
  index(@Query() query) {
    console.log('query 参数', query);
    return this.demoService.findAll()
  }

  @Get(':id')
  show(@Param() params) {
    return {
      title: `Post ${params.id}`
    }
  }

  @Post()
  store(@Body() post: CreatePostDto) {
    // 抛出异常
    // throw new HttpException('没有权限',HttpStatus.FORBIDDEN);
    throw new ForbiddenException();
    console.log(post.title);
    this.demoService.create(post);
  }

}
