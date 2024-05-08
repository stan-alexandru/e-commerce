import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home',
};

export default function Home(): JSX.Element {
	return (
		<div className='container'>
			<h1 className='title'>
				Store <br />
				<span>Kitchen Sink</span>
			</h1>
			<p className='description'>
				Built With <Link href='https://turbo.build/repo'>Turborepo</Link>
				{' & '}
				<Link href='https://nextjs.org/'>Next.js</Link>
			</p>
		</div>
	);
}
