import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTelegram } from '../../../hooks/useTelegram'
import { IFormDetails } from '../../../types/form.types'
import Button from '../../ui/button/Button'
import './Form.css'

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IFormDetails>({
		mode: 'onSubmit',
	})
	const isError = Object.keys(errors).length > 0

	const { tg } = useTelegram()

	const onSubmit = (data: IFormDetails) => {
		console.log(data)
	}

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Submit',
		})
	}, [])

	useEffect(() => {
		if (isError) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}, [isError])

	return (
		<div className='form'>
			<h3>Enter your details</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', { required: true })}
					className='input'
					type='text'
					placeholder={'Name'}
				/>
				<input
					className='input'
					type='text'
					placeholder={'Surname'}
					{...register('surname', { required: true })}
				/>
				<select className='select' {...register('gender', { required: true })}>
					<option value={'Male'}>Male</option>
					<option value={'Female'}>Female</option>
				</select>
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	)
}

export default Form
