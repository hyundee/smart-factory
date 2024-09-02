import { IModalOption } from '@/types/modal'
import { memo } from 'react'

interface ISelectableHeader {
	headers: IModalOption[]
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	isAllChecked: boolean
}

export const SelectableHeader = memo(function SelectableHeader({
	headers,
	onChange,
	isAllChecked,
}: ISelectableHeader) {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-center bg-neutral-700 text-center">
				<div className="flex h-12 w-8 items-center justify-center px-4">
					<input type="checkbox" onChange={onChange} checked={isAllChecked} />
				</div>
				{/* <div className="w-16">순번</div> */}
				{headers.map((th) => {
					return (
						<div key={th.name} className="w-full p-1">
							{th.name}
						</div>
					)
				})}
			</div>
		</div>
	)
})
