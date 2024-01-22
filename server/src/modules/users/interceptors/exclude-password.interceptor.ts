import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ExcludePasswordInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        tap(async (responsePromise) =>
          this.removePassword(await responsePromise()),
        ),
      );
  }

  private removePassword(
    userOrUsersList:
      | ObjectWIthOrWithoutPassword
      | ObjectWIthOrWithoutPassword[],
  ) {
    if (Array.isArray(userOrUsersList)) {
      this.removePasswordManyUsers(userOrUsersList);
    } else {
      this.removePasswordSingleUser(userOrUsersList);
    }
  }

  private removePasswordManyUsers(users: ObjectWIthOrWithoutPassword) {
    return users.map(this.removePasswordSingleUser);
  }

  private removePasswordSingleUser(obj: ObjectWIthOrWithoutPassword) {
    const { password, ...objWithoutPassword } = obj;
    return objWithoutPassword;
  }
}

type ObjectWIthOrWithoutPassword = Record<string, any>;
