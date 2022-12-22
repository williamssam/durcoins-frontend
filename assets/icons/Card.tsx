import { SVGProps } from 'react'

const Card = (props: SVGProps<SVGSVGElement>) => (
	<svg width={17} height={17} {...props}>
		<path fill='none' d='M0 0h24v24H0z' />
		<path
			d='M22 7H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm0 2v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9h20zm-11 5v-2.5L6.5 16H17v-2h-6z'
			fill='currentColor'
		/>
	</svg>
)

export default Card
