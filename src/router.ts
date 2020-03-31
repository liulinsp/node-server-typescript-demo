/**
 * 路由
 */
import KoaRouter from 'koa-router';
import Koa from 'koa';

const router = new KoaRouter();
router.get('/', (ctx: Koa.Context, next: Koa.Next) => {
    ctx.body = {
        msg: 'Welcome'
    }
});

router.post('/users',  (ctx: Koa.Context, next: Koa.Next) => {
    console.log('rawBody =====', ctx.request.rawBody);
    console.log('body =====', ctx.request.body);
    ctx.body = {
        msg: 'Success'
    }
});

export default router;
