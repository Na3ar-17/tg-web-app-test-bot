import { ButtonHTMLAttributes, forwardRef } from 'react'
import './Button.css'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IProps>(({ ...rest }, ref) => {
	return <button className='button' ref={ref} {...rest} />
})

export default Button
