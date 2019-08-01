import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import 'dotenv/config';

const port = process.env.PORT || 9000;
const app = express();

// parse application/json
app.use(bodyParser.json())

app.use('/api', routes);

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
