import SearchIcon from '../../../public/icons/search.svg'

export const SearchInput = () => {
	return (
		<div className="w-1/5 h-10 flex gap-2 text-black">
			<input type="text" className="py-2.5 px-4 border-gray-300 rounded-lg tracking-wide" />
			<button type="button" className="bg-white p-2 border-gray-300 rounded-lg tracking-wide">
				<div className="w-6">
					<SearchIcon />
				</div>
			</button>
		</div>
	)
}
