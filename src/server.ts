/**
 * 服务入口文件 - 使用TypeScript
 */
 // require('source-map-support').install();
import 'source-map-support/register';
import Koa from 'koa';
import jsonBodyParser from './middleware/jsonBodyParser';
import router from './router';

const port = 3000;

const app = new Koa()
    .use(jsonBodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port, () => {
    console.info(`Server running on port ${port}`);
});
