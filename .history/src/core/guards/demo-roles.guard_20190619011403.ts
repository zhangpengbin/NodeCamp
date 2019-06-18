import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DemoRolesGuard implements CanActivate {

  constructor(private readonly refle){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    console.log('handler', context.getHandler());
    console.log('handler', context.getClass());
    return false;
  }
}
