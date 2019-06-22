import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './modules/post/post.module';
import { PostController } from './modules/post/post.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3308,
      username:'nest',
      password:'password',
      database:'nest',
      synchronize:true,
      logging: true,
      entities:[__dirname + '/**/*.entity{.ts,.js}']
    }),
    PostModule
  ],
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule {}
