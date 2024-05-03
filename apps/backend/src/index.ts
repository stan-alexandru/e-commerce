import app from './app.js';
import ENV from './env.js';

const port = ENV.PORT;

app.listen(port, () => {
	/* eslint-disable no-console */
	console.log(`Listening: http://localhost:${port}`);
	/* eslint-enable no-console */
});
