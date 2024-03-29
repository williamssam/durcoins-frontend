interface DashboardTitleType {
	title: string
	upperSubtitle?: string
	subtitle?: string
}

export const DashboardTitle = ({
	title,
	subtitle,
	upperSubtitle,
}: DashboardTitleType) => {
	return (
		<header className='text-center md:text-left'>
			<p className='uppercase tracking-wide bg-gray-300 py-[2px] px-4 w-max'>
				{upperSubtitle}
			</p>
			<h3 className='font-black text-4xl md:text-5xl'>{title}</h3>
			<p className='pt-1 text-sm md:text-base'>{subtitle}</p>
		</header>
	)
}
