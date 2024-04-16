const request = require('supertest');
const server = require('../app.js');
const sayTDD = require('../helloJest');

beforeAll(async () => {
    console.log('Starting TDD with Jest!');
});

afterAll(async () => {
    server.close();
    console.log('Server closed.');
});

describe('Starting tests', () => {
    test('Access home route and verify shown content', async () => {
        const resp = await request(server).get('/');
        expect(resp.status).toEqual(200);
        expect(resp.text).toContain('<h1>Você está na Home!</h1> <p> vamos começar os testes </p>');
    });

    test('Access tdd route to show the tdd definition', async () => {
        const resp = await request(server).get('/TDD');
        expect(resp.status).toEqual(200);
        expect(resp.text).toContain('<h4>no tdd primeiro fazemos os testes e depois desenvolvemos o sistema para que ele passe nos testes</h4>')
    });

    test('Access koa route to show the Koa.js definition', async () => {
        const response = await request(server).get('/KOA');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('<h4>O Koa é uma nova estrutura da Web criada pela equipe do Express, que pretende ser uma base menor, mais expressiva e mais robusta para aplicativos da Web e APIs</h4>'); 
     });

     test('Should validate the sayTDD return function', () => {
        expect(sayTDD()).toMatch('TDD é o Desenvolvimento Orientado por Testes');
     });
});
