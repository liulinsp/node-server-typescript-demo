import Koa from "koa";

function getRawBody(ctx: Koa.Context): Promise<string> {
  return new Promise((resolve, reject) => {
      try {
        let postData: string = '';
        ctx.req.addListener('data', (data) => {
          postData += data;
        });
        ctx.req.on('end', () => {
          resolve(postData);
        });
      } catch (e) {
        console.error('获取body内容失败', e);
        reject(e);
      }
  })
}

export default function jsonBodyParser (): Koa.Middleware {
    return async(ctx: Koa.Context, next: Koa.Next) => {
      const rawBody: string = await getRawBody(ctx);
      const request: Koa.Request = ctx.request;
      request.rawBody = rawBody;
      if (rawBody) {
        try {
          request.body = JSON.parse(rawBody);
        } catch (e) {
          request.body = {};
        }
      }
      await next();   
    };
}