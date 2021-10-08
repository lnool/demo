/**
 * 结果实体类
 */
export class Result {
  static success(code = 200, data) {
    return { code, data, timestamp: new Date() };
  }
  static fail(code, message) {
    return { code, message, timestamp: new Date() };
  }
}
