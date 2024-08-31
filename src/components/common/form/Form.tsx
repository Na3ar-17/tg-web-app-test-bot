import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTelegram } from '../../../hooks/useTelegram'
import { IFormDetails } from '../../../types/form.types'
import './Form.css'

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<IFormDetails>({
		mode: 'onChange',
	})
	const isError = Object.keys(errors).length > 0 || !isValid

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
				<div>
					<input
						{...register('name', {
							required: {
								value: true,
								message: 'Name is required field',
							},
						})}
						className='input'
						type='text'
						placeholder={'Name'}
					/>
					<p>{errors.name && errors.name.message}</p>
				</div>
				<div>
					<input
						className='input'
						type='text'
						placeholder={'Surname'}
						{...register('surname', {
							required: {
								value: true,
								message: 'Surname is required field',
							},
						})}
					/>
					<p>{errors.surname && errors.surname.message}</p>
				</div>
				<select className='select' {...register('gender', { required: true })}>
					<option value={'Male'}>Male</option>
					<option value={'Female'}>Female</option>
				</select>
			</form>
		</div>
	)
}

export default Form
