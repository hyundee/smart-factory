import React, { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { SelectData, SystemData } from '@/types/basic'

interface ISystemDataList {
	onCheckedChange: (id: number, checked: boolean) => void
	dataList: SelectData[]
}

export const SystemDataList = memo(function SystemDataList({
	onCheckedChange,
	dataList,
}: ISystemDataList) {
	const handleCheckboxChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
		onCheckedChange(id, e.target.checked)
	}

	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					const NewData = data.data as SystemData
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
							<div className="w-full p-1">{NewData.parameterKey}</div>
							<div className="w-full p-1">{NewData.parameterData}</div>
							<div className="w-full p-1">{NewData.activation ? 'Y' : 'N'}</div>
							<div className="w-full p-1">{NewData.comment}</div>
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})
