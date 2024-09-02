import { memo } from 'react'
import { useFormContext, UseFormRegister } from 'react-hook-form'
import SearchIcon from '../../../public/icons/search.svg'

interface ISearchFactoryForm {
	category: { path: string; options: string[] }[]
	register: UseFormRegister<any>
}

export const SearchFactoryForm = memo(function SearchFactoryForm({
	category,
	register,
}: ISearchFactoryForm) {
	// const { register } = useFormContext()
	console.log('SearchFactoryForm 랜더링')

	return (
		<div className="flex w-full gap-5 rounded-lg bg-neutral-100 p-8 text-black">
			<div className="flex justify-start gap-14">
				{category.map((cat) => (
					<div className="flex items-center gap-5" key={cat.path}>
						<label htmlFor={cat.path}>
							{cat.path === 'factUnit' ? '생산사업장' : '워크센터구분'}
						</label>
						<select
							id={cat.path}
							{...register(cat.path)}
							className="h-10 w-40 rounded-lg border-neutral-500 px-4 py-2.5">
							{cat.options.map((option) => (
								<option
									key={option}
									value={option}
									className="rounded-lg border-gray-300 px-4 py-2.5">
									{option}
								</option>
							))}
						</select>
					</div>
				))}
			</div>
			<div className="flex h-10 gap-2 text-black">
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
