const KoaRouter = require('koa-router');
const AuthService = require('Services/auth-service');
const config = require('Config');
const jwt = require('jsonwebtoken');

const { userToToken, jwtMiddleware } = require('Helpers/auth');

const router = new KoaRouter();

const authService = new AuthService();

router.prefix('/auth');

router.post('/login', async ctx => {
  const user = await authService.login(ctx.body);
  const token = userToToken(user);

  ctx.cookies.set('token', token, {
    secure: config.get('ssl'),
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
  });

  ctx.ok({ message: 'Successfully logged in' });
});

router.post('/logout', async ctx => {
  ctx.cookies.set('token', {});

  ctx.ok({ message: 'Successfully logged out' });
})

module.exports = router;
