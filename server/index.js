
const express = require('express');
const app = express();
const router = require('./router')


app.use(express.json());

app.use(router);

// app
//   .use(bodyparser())
//   .use(router.routes())
//   .listen(port, () => console.log('Listening on port', port));


app.listen(3000);