import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTelegram } from '../../../hooks/useTelegram'
import { IFormDetails } from '../../../types/form.types'
import './Form.css'

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IFormDetails>({
		mode: 'onChange',
	})
	const isError = !!errors.gender || !!errors.surname || !!errors.name

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
				<select className='select' {...register('gender')}>
					<option value={'Male'}>Male</option>
					<option value={'Female'}>Female</option>
				</select>
			</form>
		</div>
	)
}

export default Form
