import { Injectable, NestMiddleware } from '@nestjs/common';

// 中间件会在路由处理之前被调用
@Injectable()
export class DemoMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    req.user = {
      roles:[
        'guest'
      ]
    };

    if(req.header('x-demo') == 'secret'){}



    console.log('hello  ~ ~ ~');
    next();
  }
}
