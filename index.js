const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const favicon = require('koa-favicon')
const responseTime = require('koa-response-time')
const logger = require('koa-logger')
const serve = require('koa-static')
const mount = require('koa-mount');
const ssr = require('./middleware/vueSSR')
const passport = require('./middleware/passport')
const compress = require('koa-compress')

const isProduction = process.env.NODE_ENV === 'production'

// setup X-Response-Time
app.use(responseTime())
// setup logger
app.use(logger())
// setup favicon
app.use(favicon(`${__dirname}/public/favicon.ico`))
// setup session
app.keys = require('./config/signedCookieKeys')
app.use(require('./middleware/userSessionState'));
// setup ssr
const ssrMiddleware = ssr(app, { env: process.env.NODE_ENV })
if (!isProduction) {
  app.use(require('./middleware/vfsStaticFilesCheck')({ vfs: app.vfs }))
}
// setup & mount static files at '/public`
app.use(mount('/public', serve('public', {
  maxage: 365 * 24 * 60 * 60 * 1000
})))
// setup routes
router.get('/logout', passport.logout)
router.get('/passport/github', passport.request)
router.get('/passport/github/callback', passport.callback)
// setup vuessr
router.get('*', ssrMiddleware)
app.use(compress())
app.use(router.routes())

const port = process.env.port || 3000
app.listen(port)
