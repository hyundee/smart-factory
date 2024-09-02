import { useFormContext } from 'react-hook-form'

interface ITextInput {
	keyword: string
	required: boolean
}
export const TextInput = ({ keyword, required }: ITextInput) => {
	const { register } = useFormContext()

	return (
		<input
			type="text"
			{...register(keyword, {
				required: required,
			})}
			className="w-3/4 rounded-md border border-neutral-300"
			autoFocus
		/>
	)
}
