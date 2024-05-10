import type { Request, Response } from 'express';

const getAll = async (_req: Request, res: Response) => {
	const products = {
		test: 'test',
	};
	res.json(products);
};

export { getAll };
