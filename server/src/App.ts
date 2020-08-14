import * as express from 'express';


const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    res.status(200).send('Hello!');
});

const app = express();

app.use('/', rootRouter);

export default app;
