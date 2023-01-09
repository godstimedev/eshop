import ProductOne from '../assets/images/productOne.png';
import ProductTwo from '../assets/images/productTwo.png';
import ProductThree from '../assets/images/productThree.png';
import ProductFour from '../assets/images/productFour.png';

interface Product {
	img: string;
	name: string;
	price: number;
	shortDescription: string;
	fullDescription: string;
}

export const productData: Product[] = [
	{
		img: ProductOne,
		name: 'Bathroom Tiles',
		price: 199.5,
		shortDescription: 'Ante mus blandit sapien sociosqu per consequat ad.',
		fullDescription:
			'Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend',
	},
	{
		img: ProductTwo,
		name: 'Marble',
		price: 199.5,
		shortDescription: 'Ante mus blandit sapien sociosqu',
		fullDescription:
			'Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend',
	},
	{
		img: ProductThree,
		name: 'Outdoor Flooring',
		price: 199.5,
		shortDescription: 'Ante mus blandit sapien sociosqu per consequat ad.',
		fullDescription:
			'Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend',
	},
	{
		img: ProductFour,
		name: 'Kitchen Interior',
		price: 199.5,
		shortDescription: 'Ante mus blandit sapien sociosqu per consequat ad.',
		fullDescription:
			'Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend',
	},
];
