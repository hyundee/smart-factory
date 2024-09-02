import { memo } from 'react'
import { useFormContext, UseFormRegister } from 'react-hook-form'
import SearchIcon from '../../../public/icons/search.svg'

interface ISearchForm {
	options: string[]
	category: string
	text: string
	register: UseFormRegister<any>
}

export const SearchForm = memo(function SearchForm({
	options,
	text,
	category,
	register,
}: ISearchForm) {
	// const { register } = useFormContext()
	console.log('SearchForm 랜더링')

	return (
		<div className="flex w-full gap-2 text-black">
			<select
				{...register(category)}
				className="h-10 w-32 rounded-lg border-gray-300 px-4 py-2.5">
				{/* <option disabled hidden defaultValue={placeholder}>
					{placeholder}
				</option> */}
				{options.map((option) => (
					<option key={option} className="rounded-lg border-gray-300 px-4 py-2.5">
						{option}
					</option>
				))}
			</select>
			<div className="flex h-10 w-full gap-2 text-black">
				<input
					{...register(text)}
					type="text"
					className="w-64 rounded-lg border-gray-300 px-4 py-2.5 tracking-wide"
				/>
				<button
					type="submit"
					className="rounded-lg border-gray-300 bg-white p-2 tracking-wide">
					<div className="w-5">
						<SearchIcon />
					</div>
				</button>
			</div>
		</div>
	)
})
