import { useFormContext } from 'react-hook-form'

interface ISelectInput {
	keyword: string
	required: boolean
}
export const SelectInput = ({ keyword, required }: ISelectInput) => {
	const { register } = useFormContext()
	const options = ['Y', 'N']

	return (
		<div className="flex gap-x-8">
			{options.map((option) => (
				<div key={option}>
					<label>
						<input
							type="radio"
							{...register(keyword, {
								required: required,
							})}
							value={option}
							className="mr-1"
						/>
						{option}
					</label>
				</div>
			))}
		</div>
	)
}
