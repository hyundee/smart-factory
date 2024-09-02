import { IModalOption } from '@/types/modal'
import { memo } from 'react'

interface IMenusSelectableHeader {
	headers: string[]
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	isAllChecked: boolean
}

export const MenusSelectableHeader = memo(function MenusSelectableHeader({
	headers,
	onChange,
	isAllChecked,
}: IMenusSelectableHeader) {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-center bg-neutral-700 text-center">
				<div className="flex h-12 w-8 items-center justify-center px-4">
					<input type="checkbox" onChange={onChange} checked={isAllChecked} />
				</div>
				{headers.map((th) => {
					return (
						<div key={th} className="w-full p-1">
							{th}
						</div>
					)
				})}
			</div>
		</div>
	)
})
