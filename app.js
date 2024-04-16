const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

app.use(logger());


router.get('/', (home, next) => {
    home.body = '<h1>Você está na Home!</h1> <p> vamos começar os testes </p>';
});

router.get('/TDD', (tdd, next) => {
    tdd.body = '<h4>no tdd primeiro fazemos os testes e depois desenvolvemos o sistema para que ele passe nos testes</h4>';
});

router.get('/KOA', (koa, next) => {
    koa.body = '<h4>O Koa é uma nova estrutura da Web criada pela equipe do Express, que pretende ser uma base menor, mais expressiva e mais robusta para aplicativos da Web e APIs</h4>';
});

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(3000);
module.exports = server;