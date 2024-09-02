import { UseFormRegister } from 'react-hook-form'

interface ISelectBox {
	options: string[]
	category: string
	register: UseFormRegister<any>
}

export const SelectForm = ({ options, category, register }: ISelectBox) => {
	return (
		<select
			{...register(category)}
			className="h-10 w-32 rounded-lg border-gray-300 px-4 py-2.5 text-black">
			{options.map((option) => (
				<option
					key={option}
					value={option}
					className="rounded-lg border-gray-300 px-4 py-2.5">
					{option}
				</option>
			))}
		</select>
	)
}
