/**
 * jsonBodyParser 扩展 koa 类型定义
 */
import * as Koa from "koa";

declare module "koa" {
    interface Request {
        body?: object;
        rawBody: string;
    }
}
