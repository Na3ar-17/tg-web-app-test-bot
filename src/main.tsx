import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from './components/common/form/Form'
import ProductList from './components/common/product-list/ProductList'
import MainLayout from './components/display/main/MainLayout'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <ProductList />,
			},
			{
				path: '/form',
				element: <Form />,
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
