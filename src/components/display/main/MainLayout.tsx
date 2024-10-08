import { Outlet } from 'react-router-dom'
import Header from '../../common/header/Header'

const MainLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}

export default MainLayout
