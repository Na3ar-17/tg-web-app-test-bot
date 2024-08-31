import { useEffect, useState } from 'react'
import { productsData } from '../../../data/products.data'
import { useTelegram } from '../../../hooks/useTelegram'
import { IProduct } from '../../../types/product.types'
import Item from './item/Item'
import './ProductList.css'

const ProductList = () => {
	const [addedItems, setAddedItems] = useState<IProduct[]>([])
	const { tg } = useTelegram()

	const onAdd = (product: IProduct) => {
		const existProduct = addedItems.find(el => el.id === product.id)
		if (existProduct) {
			setAddedItems(prev => {
				return prev.filter(el => el.id !== existProduct.id)
			})
		} else {
			setAddedItems(prev => {
				return [...prev, product]
			})
		}
	}

	useEffect(() => {
		if (addedItems.length == 0) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
			tg.MainButton.setParams({
				text: `Buy ${addedItems.reduce((acc, item) => (acc += item.price), 0)}`,
			})
		}
	}, [addedItems])

	return (
		<div className={'list'}>
			{productsData.map(item => (
				<Item
					isAdded={!!addedItems.find(el => el.id === item.id)}
					product={item}
					onAdd={onAdd}
					className={'item'}
				/>
			))}
		</div>
	)
}

export default ProductList
