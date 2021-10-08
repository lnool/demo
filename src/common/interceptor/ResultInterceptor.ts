import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { Result } from '../../entity/Result';

/**
 * 结果拦截器：统一返回结果
 */
export class ResultInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return Result.success(200, data);
      }),
    );
  }
}
