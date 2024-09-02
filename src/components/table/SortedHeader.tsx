import { memo } from 'react'
import SortedIcon from '../../../public/icons/chevronUpDown.svg'

interface ISortedHeader {
	headers: {
		name: string
		sorted: boolean
	}[]
	handleSorting: (key: string) => void
}

export const SortedHeader = memo(function SortedHeader({ headers, handleSorting }: ISortedHeader) {
	return (
		<div className="flex flex-col">
			<div className="flex h-12 items-center justify-center bg-neutral-700 text-center">
				{headers.map((th) => {
					return !th.sorted ? (
						<div key={th.name} className="w-full p-1">
							{th.name}
						</div>
					) : (
						<div
							key={th.name}
							className="flex w-full cursor-pointer items-center justify-center gap-2 p-1">
							{th.name}
							<div className="w-6" onClick={() => handleSorting(th.name)}>
								<span>
									<SortedIcon />
								</span>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
})
