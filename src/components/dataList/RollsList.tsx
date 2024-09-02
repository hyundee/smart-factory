import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { RollsData, SelectData } from '@/types/basic'

interface IRollsList {
	onCheckedChange: (id: number, checked: boolean) => void
	dataList: SelectData[]
	getMenuIdsData: (ids: string) => void
}

export const RollsList = memo(function RollsList({
	dataList,
	onCheckedChange,
	getMenuIdsData,
}: IRollsList) {
	const handleCheckboxChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(id)
		onCheckedChange(id, e.target.checked)
	}

	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					const NewData = data.data as RollsData
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
							<div
								onClick={() => getMenuIdsData(NewData.menuIds)}
								className="w-full cursor-pointer p-1">
								{NewData.name}
							</div>
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})
