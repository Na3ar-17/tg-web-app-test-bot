import { IProduct } from '../../../../types/product.types'
import Button from '../../../ui/button/Button'
import '../ProductList.css'

interface IProps {
	product: IProduct
	className: string
	onAdd: (produce: IProduct) => void
	isAdded: boolean
}

const Item = ({ product, className, onAdd, isAdded }: IProps) => {
	return (
		<div className={'product ' + className}>
			<div className={'img'} />
			<div className={'title'}>{product.title}</div>
			<div className={'description'}>{product.description}</div>
			<div className={'price'}>
				<span>
					Price: <b>{product.price}</b>
				</span>
			</div>
			<Button onClick={() => onAdd(product)}>
				{isAdded ? 'Remove from favorites' : 'Add to favorites'}
			</Button>
		</div>
	)
}

export default Item
