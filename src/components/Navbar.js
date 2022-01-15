import { Link } from 'react-router-dom'

const pages = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Tokens',
		path: '/tokens',
	},
	{
		name: 'NFTs',
		path: '/nfts',
	},
	{
		name: 'History',
		path: '/history',
	},
]

const Navbar = () => {
	return (
		<div className='flex justify-evenly'>
			{pages.map(page => (
				<Link key={page.name} to={page.path}>
					<div className='text-xl'>{page.name}</div>
				</Link>
			))}
		</div>
	)
}

export default Navbar
