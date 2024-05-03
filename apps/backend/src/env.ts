import { z } from 'zod';
const envSchema = z.object({
	PORT: z.coerce.number().min(1000),
});

const ENV = envSchema.parse(process.env);
export default ENV;
