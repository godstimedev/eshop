type PageHeaderProps = {
	title: string;
	desc: string;
};

const PageHeader = ({ title, desc }: PageHeaderProps) => {
	return (
		<div className="w-full flex flex-col gap-4 ">
			<h1 className="text-3xl font-bold">{title}</h1>
			<p>{desc}</p>
		</div>
	);
};

export default PageHeader;
