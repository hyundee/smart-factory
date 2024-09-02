import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { ProcessesTypeData, SelectData } from '@/types/basic'

interface IDefectTypeList {
	onCheckedChange: (index: number, id: number, checked: boolean) => void
	dataList: SelectData[]
}

export const DefectTypeList = memo(function DefectTypeList({
	onCheckedChange,
	dataList,
}: IDefectTypeList) {
	const handleCheckboxChange = (
		index: number,
		id: number,
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		onCheckedChange(index, id, e.target.checked)
	}

	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					const NewData = data.data as ProcessesTypeData
					return (
						<div
							key={index}
							className="flex items-center bg-neutral-100 text-center text-black">
							<div className="flex h-8 w-8 items-center justify-center">
								<input
									type="checkbox"
									checked={data.checked}
									onChange={(e) => handleCheckboxChange(index, data.id, e)}
								/>
							</div>
							<div className="flex w-16 items-center justify-center">{index + 1}</div>
							<div className="w-full p-1">{NewData.name}</div>
							<div className="w-full p-1">{NewData.tag}</div>
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})
