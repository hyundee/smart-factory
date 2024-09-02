import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { ItemData, SelectData } from '@/types/basic'

interface IItemsList {
	onCheckedChange: (id: number, checked: boolean) => void
	dataList: SelectData[]
}

export const ItemsList = memo(function ItemsList({ onCheckedChange, dataList }: IItemsList) {
	const handleCheckboxChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
		onCheckedChange(id, e.target.checked)
	}

	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					const NewData = data.data as ItemData
					return (
						<div
							key={index}
							className="flex items-center bg-neutral-100 text-center text-black">
							<div className="flex h-8 w-8 items-center justify-center px-4">
								<input
									type="checkbox"
									checked={data.checked}
									onChange={(e) => handleCheckboxChange(data.id, e)}
								/>
							</div>
							<div className="w-full p-1">{NewData.id}</div>
							<div className="w-full p-1">{NewData.name}</div>
							<div className="w-full p-1">{NewData.activation ? 'Y' : 'N'}</div>
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})
