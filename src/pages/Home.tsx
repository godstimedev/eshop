import React from 'react';
import Collections from '../components/Collections';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Projects from '../components/Projects';
import ShowRoom from '../components/ShowRoom';
import Vision from '../components/Vision';

type Props = {};

function Home({}: Props) {
	return (
		<div>
			<Hero />
			<Products />
			<Vision />
			<Projects />
			<Collections />
			<ShowRoom />
		</div>
	);
}

export default Home;
