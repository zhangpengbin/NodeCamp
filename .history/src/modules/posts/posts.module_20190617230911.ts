import { Module } from '@nestjs/common';
import { PostsController } from 'dist/posts/posts.controller';

@Module({
  controllers:[PostsController]
})
export class PostsModule {}
