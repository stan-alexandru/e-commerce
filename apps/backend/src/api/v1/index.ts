import express from 'express';

const app = express();

app.get('/', (_req, res) => {
	res.send('Hello');
});

export default app;
