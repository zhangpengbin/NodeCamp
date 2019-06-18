import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class DemoRolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const roles = this.reflector.get<string[]>('roles',context.getHandler());
    console.log('角色',roles);

    if(!roles){
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const {user} = request;
    const hasRole = () => user.roles.some(role => roles.includes(role));



    // console.log('handler', context.getHandler());
    // console.log('handler', context.getClass());
    return user && user.roles && hasRole();
  }
}
