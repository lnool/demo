import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Result } from '../../entity/Result';

/**
 * 结果异常过滤器：统一异常返回结果
 */
@Catch()
export class ResultExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const response = host.switchToHttp().getResponse();
    response.json(
      Result.fail(exception.response.statusCode, exception.response.message),
    );
  }
}
