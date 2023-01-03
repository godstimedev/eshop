import React from 'react';
import Collections from '../components/Collections';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Projects from '../components/Projects';

type Props = {};

function Home({}: Props) {
	return (
		<div>
			<Hero />
			<Products />
			<Projects />
			<Collections />
		</div>
	);
}

export default Home;
