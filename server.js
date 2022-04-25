

const app = require('express')();
const expressip = require('express-ip');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');

app.use(bodyParser.json({ limit: '50MB' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressip().getIpInfoMiddleware);
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Token',
  );
  next();
});

app.use('/api', routes);

app.listen(8080, () => {});
