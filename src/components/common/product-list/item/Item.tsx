import { IProduct } from '../../../../types/product.types'
import Button from '../../../ui/button/Button'
import '../ProductList.css'

interface IProps {
	product: IProduct
	className: string
}

const Item = ({ product, className }: IProps) => {
	return (
		<div className={'product ' + className}>
			<div className={'img'} />
			<div className={'title'}>{product.title}</div>
			<div className={'description'}>{product.description}</div>
			<div className={'price'}>
				<span>
					Стоимость: <b>{product.price}</b>
				</span>
			</div>
			<Button className={'add-btn'}>Добавить в корзину</Button>
		</div>
	)
}

export default Item
