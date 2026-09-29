import express from 'express';

const servidor = express();

///ENDPOINTS///

servidor.get('/Hellooword', (req, resp) => {

resp.send('helloword !!!!');



})











servidor.listen(5001, () => console.log('Api esta subindo!!'));
