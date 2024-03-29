import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const Cookies = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return data ? req.cookies?.data : req.cookies;
  },
);
