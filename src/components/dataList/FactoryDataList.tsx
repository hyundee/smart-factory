import React, { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { FactoriesData } from '@/types/basic'

interface IFactoryDataList {
	dataList: FactoriesData[]
}

export const FactoryDataList = memo(function FactoryDataList({ dataList }: IFactoryDataList) {
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					return (
						<div
							key={index}
							className="flex items-center bg-neutral-100 text-center text-black">
							<div className="w-full p-1">{data.id}</div>
							<div className="w-full p-1">{data.name}</div>
							<div className="w-full p-1">{data.factUnit}</div>
							<div className="w-full p-1">{data.factUnitName}</div>
							<div className="w-full p-1">{data.smWorkCenterType}</div>
							<div className="w-full p-1">{data.partner.id}</div>
							<div className="w-full p-1">{data.startDate}</div>
							<div className="w-full p-1">{data.endDate}</div>
							<div className="w-full p-1">{data.matOutWhSeq}</div>
							<div className="w-full p-1">{data.fieldWhSeq}</div>
							<div className="w-full p-1">{data.prodInWhSeq}</div>
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})
